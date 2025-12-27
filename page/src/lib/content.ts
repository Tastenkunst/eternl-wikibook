import MarkdownIt, { Token } from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItContainer from 'markdown-it-container';
import GithubSlugger from 'github-slugger';

import summaryRaw from '../../../SUMMARY.md?raw';

type RawDocs = Record<string, string>;

export type TocItem = {
  id: string;
  title: string;
  level: number;
  children: TocItem[];
};

export type DocPage = {
  routePath: string;
  filePath: string;
  title: string;
  description?: string;
  html: string;
  toc: TocItem[];
  cover?: string;
};

export type NavItem = {
  id: string;
  title: string;
  href: string;
  routePath?: string;
  external?: boolean;
  children: NavItem[];
};

export type NavLink = {
  title: string;
  routePath: string;
};

export type SearchEntry = {
  title: string;
  routePath: string;
  text: string;
};

const rawDocs = import.meta.glob('../../../**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as RawDocs;

const repoDocs = new Map<string, string>();
Object.entries(rawDocs).forEach(([path, raw]) => {
  const repoPath = normalizeRepoPath(path);
  if (repoPath.startsWith('page/')) {
    return;
  }
  repoDocs.set(repoPath, raw);
});

const navTree = parseSummary(summaryRaw);
const docsByRoute = new Map<string, DocPage>();
const flatNav: NavLink[] = [];

hydrateNav(navTree);

const searchIndex = buildSearchIndex();

export { navTree, docsByRoute, flatNav, searchIndex };

export function getDocByRoute(routePath: string): DocPage | undefined {
  return docsByRoute.get(normalizeRoutePath(routePath));
}

export function getPrevNext(routePath: string): { prev?: NavLink; next?: NavLink } {
  const normalized = normalizeRoutePath(routePath);
  const index = flatNav.findIndex((item) => item.routePath === normalized);
  if (index === -1) {
    return {};
  }
  return {
    prev: flatNav[index - 1],
    next: flatNav[index + 1]
  };
}

function normalizeRoutePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
}

function normalizeRepoPath(path: string): string {
  return path.replace(/^(\.\.\/)+/, '').replace(/^\//, '');
}

function parseSummary(markdown: string): NavItem[] {
  const root: NavItem[] = [];
  const stack: Array<{ indent: number; children: NavItem[] }> = [{ indent: -1, children: root }];
  let index = 0;

  markdown.split('\n').forEach((line) => {
    const match = line.match(/^(\s*)\*\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (!match) {
      return;
    }
    const indent = match[1].length;
    const level = Math.floor(indent / 2);
    const title = match[2].trim();
    const href = match[3].trim();

    const item: NavItem = {
      id: `nav-${index++}`,
      title,
      href,
      children: []
    };

    while (stack.length && stack[stack.length - 1].indent >= level) {
      stack.pop();
    }

    stack[stack.length - 1].children.push(item);
    stack.push({ indent: level, children: item.children });
  });

  return root;
}

function hydrateNav(items: NavItem[]): void {
  items.forEach((item) => {
    if (isExternalLink(item.href)) {
      item.external = true;
    } else if (item.href.endsWith('.md')) {
      const repoPath = normalizeRepoPath(item.href);
      const routePath = toRoutePath(repoPath);
      item.routePath = routePath;
      flatNav.push({ title: item.title, routePath });

      if (!docsByRoute.has(routePath)) {
        const raw = repoDocs.get(repoPath);
        const doc = raw
          ? buildDocPage(repoPath, raw, item.title)
          : buildMissingDoc(repoPath, item.title);
        docsByRoute.set(routePath, doc);
      }
    }

    if (item.children.length) {
      hydrateNav(item.children);
    }
  });
}

function buildMissingDoc(filePath: string, title: string): DocPage {
  const message = `# ${title}\n\nThis page is referenced in SUMMARY.md but the file is missing.`;
  return buildDocPage(filePath, message, title);
}

function buildSearchIndex(): SearchEntry[] {
  return flatNav
    .map((item) => {
      const doc = docsByRoute.get(item.routePath);
      if (!doc) {
        return null;
      }
      return {
        title: doc.title,
        routePath: doc.routePath,
        text: stripHtml(doc.html)
      };
    })
    .filter((entry): entry is SearchEntry => entry !== null);
}

function buildDocPage(filePath: string, raw: string, fallbackTitle: string): DocPage {
  const { data, content } = parseFrontMatter(raw);
  const description = typeof data.description === 'string' ? data.description : undefined;
  const cover = normalizeCover(data.cover);
  const processed = preprocessGitbook(content);

  const md = createMarkdownRenderer(filePath);
  const tokens = md.parse(processed, {});
  const { title, tokens: trimmedTokens } = extractTitle(tokens, fallbackTitle);
  const toc = buildToc(trimmedTokens);
  const html = md.renderer.render(trimmedTokens, md.options, {});

  return {
    routePath: toRoutePath(filePath),
    filePath,
    title,
    description,
    html,
    toc,
    cover
  };
}

function createMarkdownRenderer(filePath: string): MarkdownIt {
  const slugger = new GithubSlugger();
  const md = new MarkdownIt({
    html: true,
    linkify: true
  });

  md.use(markdownItAnchor, {
    slugify: (value: string) => slugger.slug(value)
  });

  md.use(markdownItContainer, 'hint', {
    render(tokens, idx) {
      const token = tokens[idx];
      if (token.nesting === 1) {
        const parts = token.info.trim().split(/\s+/);
        const style = parts[1] || 'note';
        return `<div class="gb-hint gb-hint-${style}">`;
      }
      return '</div>';
    }
  });

  const defaultLinkOpen = md.renderer.rules.link_open ?? ((tokens, idx, options, _env, self) => {
    return self.renderToken(tokens, idx, options);
  });

  md.renderer.rules.link_open = (tokens, idx, options, _env, self) => {
    const token = tokens[idx];
    const hrefIdx = token.attrIndex('href');
    if (hrefIdx >= 0) {
      const href = token.attrs?.[hrefIdx]?.[1];
      if (href) {
        const { resolved, external } = resolveHref(href, filePath);
        token.attrs![hrefIdx][1] = resolved;
        if (external) {
          token.attrSet('target', '_blank');
          token.attrSet('rel', 'noreferrer');
        }
      }
    }
    return defaultLinkOpen(tokens, idx, options, _env, self);
  };

  return md;
}

function preprocessGitbook(content: string): string {
  let output = rewriteGitbookAssets(content);

  output = output.replace(/\{%\s*hint\s+style="([^"]+)"\s*%\}/g, (_match, style) => {
    return `::: hint ${style}\n`;
  });

  output = output.replace(/\{%\s*endhint\s*%\}/g, ':::');

  output = output.replace(/\{%\s*embed\s+url="([^"]+)"\s*%\}/g, (_match, url) => {
    return renderEmbed(url);
  });

  return output;
}

function rewriteGitbookAssets(value: string): string {
  return value.replace(/(?:\.\.\/)*\.gitbook\/assets\//g, '/gitbook-assets/');
}

function renderEmbed(url: string): string {
  const youtubeId = getYoutubeId(url);
  if (youtubeId) {
    const src = `https://www.youtube.com/embed/${youtubeId}`;
    return `\n<div class="gb-embed">\n  <iframe src="${src}" title="Embedded video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n`;
  }
  return `\n<div class="gb-embed">\n  <a href="${url}" target="_blank" rel="noreferrer">${url}</a>\n</div>\n`;
}

function getYoutubeId(url: string): string | null {
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split(/[?&#]/)[0];
    return id || null;
  }
  if (url.includes('youtube.com')) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  }
  return null;
}

function resolveHref(href: string, filePath: string): { resolved: string; external: boolean } {
  if (href.startsWith('#')) {
    return { resolved: href, external: false };
  }
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return { resolved: href, external: true };
  }

  const [pathPart, hash] = href.split('#');
  if (!pathPart) {
    return { resolved: href, external: false };
  }

  if (!pathPart.endsWith('.md')) {
    return { resolved: href, external: false };
  }

  const resolvedPath = pathPart.startsWith('/')
    ? pathPart.replace(/^\//, '')
    : resolveRelativePath(filePath, pathPart);
  const routePath = toRoutePath(resolvedPath);
  const resolved = hash ? `${routePath}#${hash}` : routePath;
  return { resolved, external: false };
}

function resolveRelativePath(baseFilePath: string, relativePath: string): string {
  const baseDir = baseFilePath.includes('/')
    ? baseFilePath.slice(0, baseFilePath.lastIndexOf('/') + 1)
    : '';
  const url = new URL(relativePath, `https://docs.local/${baseDir}`);
  return url.pathname.replace(/^\//, '');
}

function toRoutePath(repoPath: string): string {
  const normalized = repoPath.replace(/\\/g, '/');
  if (normalized === 'README.md') {
    return '/';
  }
  if (normalized.endsWith('/README.md')) {
    const trimmed = normalized.replace(/\/README\.md$/, '');
    return `/${trimmed}`;
  }
  return `/${normalized.replace(/\.md$/, '')}`;
}

function extractTitle(tokens: Token[], fallbackTitle: string): {
  title: string;
  tokens: Token[];
} {
  const trimmedTokens = [...tokens];
  for (let i = 0; i < trimmedTokens.length; i += 1) {
    const token = trimmedTokens[i];
    if (token.type === 'heading_open' && token.tag === 'h1') {
      const inline = trimmedTokens[i + 1];
      const title = inline?.type === 'inline' ? inline.content.trim() : fallbackTitle;
      trimmedTokens.splice(i, 3);
      return { title: title || fallbackTitle, tokens: trimmedTokens };
    }
  }
  return { title: fallbackTitle, tokens: trimmedTokens };
}

function buildToc(tokens: Token[]): TocItem[] {
  const toc: TocItem[] = [];
  let currentH2: TocItem | null = null;

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type === 'heading_open') {
      const level = Number.parseInt(token.tag.replace('h', ''), 10);
      if (level < 2 || level > 3) {
        continue;
      }
      const inline = tokens[i + 1];
      if (!inline || inline.type !== 'inline') {
        continue;
      }
      const id = token.attrGet('id') || '';
      const item: TocItem = {
        id,
        title: inline.content,
        level,
        children: []
      };

      if (level === 2) {
        toc.push(item);
        currentH2 = item;
      } else if (currentH2) {
        currentH2.children.push(item);
      } else {
        toc.push(item);
      }
    }
  }

  return toc;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function parseFrontMatter(raw: string): { data: Record<string, unknown>; content: string } {
  const lines = raw.split(/\r?\n/);
  if (lines[0]?.trim() !== '---') {
    return { data: {}, content: raw };
  }

  let endIndex = -1;
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i].trim() === '---') {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) {
    return { data: {}, content: raw };
  }

  const frontLines = lines.slice(1, endIndex);
  const content = lines.slice(endIndex + 1).join('\n');
  const data = parseFrontMatterLines(frontLines);

  return { data, content };
}

function parseFrontMatterLines(lines: string[]): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  let currentObjectKey: string | null = null;
  let currentBlock:
    | {
        key: string;
        style: '>' | '|';
        indent: number;
        lines: string[];
      }
    | null = null;

  const flushBlock = () => {
    if (!currentBlock) {
      return;
    }
    const joined =
      currentBlock.style === '>'
        ? currentBlock.lines.join(' ').replace(/\s+/g, ' ').trim()
        : currentBlock.lines.join('\n').replace(/\s+$/, '');
    data[currentBlock.key] = joined;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const indent = line.match(/^(\s*)/)?.[1].length ?? 0;

    if (currentBlock) {
      if (indent > currentBlock.indent) {
        const sliceIndex = Math.min(line.length, currentBlock.indent + 2);
        currentBlock.lines.push(line.slice(sliceIndex));
        continue;
      }
      flushBlock();
      currentBlock = null;
    }

    if (indent > 0 && currentObjectKey && indent >= 2) {
      const nested = parseKeyValue(trimmed);
      if (nested) {
        const [key, rawValue] = nested;
        const object = (data[currentObjectKey] as Record<string, unknown>) ?? {};
        object[key] = parseScalar(rawValue);
        data[currentObjectKey] = object;
      }
      continue;
    }

    if (indent === 0) {
      currentObjectKey = null;
    }

    const match = parseKeyValue(trimmed);
    if (!match) {
      continue;
    }
    const [key, rawValue] = match;
    if (!rawValue) {
      data[key] = {};
      currentObjectKey = key;
      continue;
    }
    if (rawValue.startsWith('>') || rawValue.startsWith('|')) {
      currentBlock = {
        key,
        style: rawValue[0] as '>' | '|',
        indent,
        lines: []
      };
      continue;
    }
    data[key] = parseScalar(rawValue);
  }

  if (currentBlock) {
    flushBlock();
  }

  return data;
}

function parseKeyValue(value: string): [string, string] | null {
  const match = value.match(/^([^:]+):\s*(.*)$/);
  if (!match) {
    return null;
  }
  return [match[1].trim(), match[2].trim()];
}

function parseScalar(value: string): string | number | boolean {
  const unquoted = stripQuotes(value);
  if (/^(true|false)$/i.test(unquoted)) {
    return unquoted.toLowerCase() === 'true';
  }
  if (/^-?\d+(\.\d+)?$/.test(unquoted)) {
    return Number(unquoted);
  }
  return unquoted;
}

function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function normalizeCover(cover: unknown): string | undefined {
  if (!cover) {
    return undefined;
  }
  if (typeof cover === 'string') {
    return rewriteGitbookAssets(cover);
  }
  if (typeof cover === 'object') {
    const record = cover as Record<string, string | undefined>;
    const candidate = record.light || record.dark;
    return candidate ? rewriteGitbookAssets(candidate) : undefined;
  }
  return undefined;
}

function isExternalLink(href: string): boolean {
  return /^(https?:)/.test(href);
}
