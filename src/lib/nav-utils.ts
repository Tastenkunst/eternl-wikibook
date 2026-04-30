export interface ParsedLink {
  title: string;
  routePath: string;
  icon?: string;
  external: boolean;
}

/**
 * Verarbeitet einen Titel-String mit optionalem Icon (Titel :: /pfad/icon.svg)
 * und normalisiert den Pfad/Link.
 */
export function parseNavigationLink(rawText: string, href: string): ParsedLink {
  // 1. Icon-Parsing (Titel :: Icon)
  const [title, icon] = rawText.split('::').map(s => s.trim());

  // 2. Extern-Check
  const external = /^(https?:)/.test(href);

  // 3. Pfad-Normalisierung (wie in deiner content.ts)
  let routePath = href;
  if (!external) {
    routePath = href.replace(/\.md$/, '');
    if (!routePath.startsWith('/')) {
      routePath = '/' + routePath;
    }
  }

  return { title, routePath, icon, external };
}
