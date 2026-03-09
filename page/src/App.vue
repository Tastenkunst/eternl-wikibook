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

function applyTheme(value: 'dark' | 'light') {
  const root = document.documentElement;
  root.classList.remove('dark', 'light');
  root.classList.add(value);
  localStorage.setItem('wiki-theme', value);
  theme.value = value;
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
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="border-b border-ink-10 bg-ivory-80 backdrop-blur app-header">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 app-header-inner">
        <span class="text-xl font-bold">Eternl Wiki</span>
        <div class="flex items-center gap-3">
          <SearchBox />
          <button
            type="button"
            class="theme-toggle flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-semibold uppercase tracking-[0.2em]"
            @click="applyTheme(theme === 'dark' ? 'light' : 'dark')"
            :aria-pressed="theme === 'dark'"
            :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <img
              :src="theme === 'dark' ? '/gitbook-assets/icons/IconSun03.svg' : '/gitbook-assets/icons/IconMoon02.svg'"
              alt=""
              aria-hidden="true"
              class="h-5 w-5"
            />
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
