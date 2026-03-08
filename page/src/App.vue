<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { navTree } from '@/lib/content';
import Sidebar from '@/components/Sidebar.vue';
import SearchBox from '@/components/SearchBox.vue';
import MobileNav from '@/components/MobileNav.vue';

const route = useRoute();
const currentPath = computed(() => route.path);
const mainRef = ref<HTMLElement | null>(null);
const theme = ref<'dark' | 'light'>('dark');

const iconMap = new Map<string, string>([
  ['Governance', 'GovernanceDRep'],
  ['Staking', 'StakingOutline'],
  ['DApp Browser', 'DApp2'],
]);

function getIconPath(name: string): string {
  const mapped = iconMap.get(name) ?? name;
  const clean = mapped.startsWith('Icon') ? mapped.slice(4) : mapped;
  return `/gitbook-assets/icons/${clean}.svg`;
}

const themeIcon = computed(() => getIconPath(theme.value === 'dark' ? 'IconSun03' : 'IconMoon02'));

function applyTheme(value: 'dark' | 'light') {
  const root = document.documentElement;
  root.classList.remove('dark', 'light');
  root.classList.add(value);
  localStorage.setItem('wiki-theme', value);
  theme.value = value;
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark');
}

onMounted(() => {
  const saved = localStorage.getItem('wiki-theme');
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  } else {
    applyTheme('dark');
  }
});

watch(
  () => route.path,
  () => {
    requestAnimationFrame(() => {
      mainRef.value?.focus();
    });
  }
);
</script>

<template>
  <div class="min-h-screen bg-[#0f172a] text-white">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="border-b border-ink-10 bg-ivory-80 backdrop-blur">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-ink-60">Eternl</p>
          <p class="font-display text-2xl text-ink">Wiki Viewer</p>
          <p class="text-sm text-ink-70">Support documentation for the Cardano ecosystem.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <SearchBox />
          <button
            type="button"
            class="theme-toggle flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#fdbb2d] transition hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            @click="toggleTheme"
            :aria-pressed="theme === 'dark'"
            aria-label="Toggle theme"
          >
            <img :src="themeIcon" alt="Toggle theme" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>

    <div class="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside class="hidden lg:block">
        <Sidebar :items="navTree" :current-path="currentPath" />
      </aside>
      <main id="main-content" ref="mainRef" tabindex="-1" class="min-w-0">
        <div class="mb-6 lg:hidden">
          <MobileNav :items="navTree" :current-path="currentPath" />
        </div>
        <RouterView />
      </main>
    </div>

    <footer class="border-t border-white/10 bg-white/5">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-xs text-ink-60 sm:px-6">
        <span>Read-only viewer. Edit Markdown in WebStorm or VSCode.</span>
        <span>Generated from SUMMARY.md and GitBook content.</span>
      </div>
    </footer>
  </div>
</template>
