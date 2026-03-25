<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getDocByRoute, getPrevNext } from '@/lib/content';
import Toc from '@/components/Toc.vue';

const route = useRoute();
const routePath = computed(() => normalizePath(route.path));
const doc = computed(() => getDocByRoute(routePath.value));
const prevNext = computed(() => getPrevNext(routePath.value));
const isDark = ref(false);

const chevronSvg = '<svg class="doc-section-chevron" viewBox="0 0 24 24" fill="none" width="25px" height="25px"><path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'

const defaultWelcomeBanner = {
  light: '/gitbook-assets/pictures/v1-light.jpg',
  dark: '/gitbook-assets/pictures/v1-dark.jpg'
};

let themeObserver: MutationObserver | null = null;

const coverSrc = computed(() => {
  const cover = doc.value?.cover;
  if (!cover) {
    return undefined;
  }
  if (typeof cover === 'string') {
    if (cover.endsWith('/pictures/v1-dark.jpg')) {
      return isDark.value ? defaultWelcomeBanner.dark : defaultWelcomeBanner.light;
    }
    return cover;
  }
  return isDark.value ? cover.dark || cover.light : cover.light || cover.dark;
});

const processedDocHtml = computed(() => {
  if (!doc.value?.html) {
    return '';
  }

  // automatische navigation für child elemente (aus summary)
  if (doc.value.html.includes('[[child-nav]]')) {
    const childHtml = renderChildNavigation(doc.value.children);
    doc.value.html = doc.value.html.replace('[[child-nav]]', childHtml);
  }

  // manuelle navigation für im markdown übergebene elemente
  const customNavRegex = /\[\[custom-nav\]\]([\s\S]*?)\[\[\/custom-nav\]\]/g;

  doc.value.html = doc.value.html.replace(customNavRegex, (_, innerContent) => {
    // Wir suchen nach allen Links im inneren Bereich
    const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/g;
    const manualItems = [];
    let match;

    while ((match = linkRegex.exec(innerContent)) !== null) {
      const title = match[2].replace(/<[^>]*>?/gm, '').trim(); // HTML aus Titel entfernen
      let routePath = match[1];

      // Optional: .md am Ende entfernen, falls du es im MD mit hingeschrieben hast
      routePath = routePath.replace(/\.md$/, '');
      // Sicherstellen, dass der Pfad mit / beginnt, wenn es kein externer Link ist
      if (!routePath.startsWith('http') && !routePath.startsWith('/')) {
        routePath = '/' + routePath;
      }

      manualItems.push({ title, routePath });
    }

    return manualItems.length > 0 ? renderChildNavigation(manualItems) : '';
  });

  if (typeof document === 'undefined') {
    return doc.value.html;
  }

  // wenn frontmatter disableH2Collapse === true, dann h2 nicht in summary/detail-tags gewrappt
  if (doc.value.disableH2Collapse) {
    return doc.value.html;
  }

  return wrapSections(doc.value.html);
});

// hilfsfunktion für das erstellen von navigations kacheln
function renderChildNavigation(items?: Array<{ title: string; routePath: string }>) {
  if (!items || items.length === 0) return '';

  const links = items.map(item => `
    <a href="${item.routePath}" class="child-nav-card group no-underline">
      <div class="child-nav-title">${item.title}</div>
      <span class="child-nav-arrow">→</span>
    </a>
  `).join('');

  return `<div class="child-nav-grid">${links}</div>`;
}

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
}

function syncThemeState() {
  if (typeof document === 'undefined') {
    return;
  }
  const root = document.documentElement;
  const body = document.body;
  isDark.value = root.classList.contains('dark') || body.classList.contains('dark');
}

// für ausklappen eingeklappter h2, bei auswahl über toc
function handleHashChange() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  const targetElement = document.getElementById(hash);
  if (targetElement) {
    // Suche das nächste Eltern-Element vom Typ <details>
    const parentDetails = targetElement.closest('details');
    if (parentDetails) {
      parentDetails.open = true;

      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }
}

onMounted(() => {
  syncThemeState();
  if (typeof document === 'undefined') {
    return;
  }
  themeObserver = new MutationObserver(syncThemeState);
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });

  // Reagiere auf Klicks im TOC (URL Hash ändert sich)
  window.addEventListener('hashchange', handleHashChange);
  // Prüfe beim ersten Laden, falls die URL bereits einen Hash hat
  if (window.location.hash) {
    handleHashChange();
  }
});

onBeforeUnmount(() => {
  themeObserver?.disconnect();

  window.removeEventListener('hashchange', handleHashChange);
});

function wrapSections(html: string): string {
  const container = document.createElement('div');
  container.innerHTML = html;
  const serializer = new XMLSerializer();
  const nodes = Array.from(container.childNodes);
  let intro = '';
  const sections: Array<{ headingHtml: string; content: string }> = [];
  let current: { headingHtml: string; content: string } | null = null;

  nodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName === 'H2') {
      if (current) {
        sections.push(current);
      }
      current = {
        headingHtml: (node as Element).outerHTML,
        content: '',
      };
    } else if (current) {
      current.content += serializer.serializeToString(node);
    } else {
      intro += serializer.serializeToString(node);
    }
  });

  if (current) {
    sections.push(current);
  }

  if (!sections.length) {
    return html;
  }

  // wenn nur eine h2, dann keine ein-/ausklapp funktionalität
  if (sections.length <= 1) {
    return html;
  }

  let result = intro;
  sections.forEach((section, index) => {
    result += `
<details class="doc-section" ${index === 0 ? 'open' : ''}>
  <summary class="doc-section-summary">
<!--    <img-->
<!--      class="doc-section-chevron"-->
<!--      src="/gitbook-assets/icons/ChevronDown.svg"-->
<!--      alt=""-->
<!--      role="presentation"-->
<!--      aria-hidden="true"-->
<!--    />-->
    ${chevronSvg}
    ${section.headingHtml}
  </summary>
  <div class="doc-section-content">
    ${section.content}
  </div>
</details>`;
  });

  return result;
}
</script>

<template>
  <section v-if="doc" class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] h-full">
    <article class="doc-card flex flex-col h-full">
      <div v-if="coverSrc" class="mb-6 overflow-hidden rounded-2xl border border-ink-10">
        <img :src="coverSrc" alt="" class="banner-image h-48 w-full object-cover" />
      </div>

      <header class="mb-2">
<!--        <p v-if="doc.description" class="text-sm text-ink-70">{{ doc.description }}</p>-->
        <h1 class="font-display text-3xl color-primary sm:text-4xl">{{ doc.title }}</h1>
        <p v-if="doc.description" class="text-s text-ink">{{ doc.description }}</p>
      </header>

      <div class="mb-8 lg:hidden" v-if="doc.toc.length">
        <Toc :items="doc.toc" />
      </div>

      <div class="doc-content flex-grow" v-html="processedDocHtml"></div>

      <div class="mt-12 flex items-center justify-between gap-4 border-t border-ink-10 pt-6 text-sm">
        <RouterLink
          v-if="prevNext.prev"
          :to="prevNext.prev.routePath"
          class="bottom-nav rounded-full border border-ink-40 px-4 py-2 transition hover:border-ink-80"
        >
          ← {{ prevNext.prev.title }}
        </RouterLink>
        <span v-else></span>
        <RouterLink
          v-if="prevNext.next"
          :to="prevNext.next.routePath"
          class="bottom-nav rounded-full border border-ink-40 px-4 py-2 text-right transition hover:border-ink-80"
        >
          {{ prevNext.next.title }} →
        </RouterLink>
      </div>
    </article>

    <aside class="hidden lg:block">
      <Toc v-if="doc.toc.length > 2" :items="doc.toc" />
    </aside>
  </section>

  <section v-else class="doc-card">
    <h1 class="font-display text-2xl">Page not found</h1>
    <p class="mt-2 text-sm text-ink-70">The requested page is not in SUMMARY.md.</p>
  </section>
</template>
