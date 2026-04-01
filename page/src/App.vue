<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { navTree } from '@/lib/content';
import Sidebar from '@/components/Sidebar.vue';
import SearchBox from '@/components/SearchBox.vue';
import MobileNav from '@/components/MobileNav.vue';

import logoUrl from '@assets/pictures/eternl-logo-small-vector.png';

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

function handleLogoClick() {
  window.dispatchEvent(new CustomEvent('wiki:collapse-nav'));
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
  <div class="min-h-screen bg text-[var(--color-text)]">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="sticky top-0 z-50 border-b border-ink-10 bg-ivory-30 backdrop-blur app-header">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 app-header-inner">

        <RouterLink
            to="/"
            class="flex items-center gap-1 select-none"
            @click="handleLogoClick"
        >
          <img :src="logoUrl" alt="" class="w-8 h-auto" >
          <span class="text-xl font-bold brand-text">Eternl Wiki</span>
        </RouterLink>

        <div class="flex items-center gap-3">
          <SearchBox />
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="theme-toggle flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 tracking-[0.2em] text-xs uppercase font-semibold"
              @click="applyTheme('dark')"
              :aria-pressed="theme === 'dark'"
              aria-label="Switch to dark mode"
              :class="{ 'theme-toggle-active': theme === 'dark' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" width="25px" height="25px">
                <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              class="theme-toggle flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 tracking-[0.2em] text-xs uppercase font-semibold"
              @click="applyTheme('light')"
              :aria-pressed="theme === 'light'"
              aria-label="Switch to light mode"
              :class="{ 'theme-toggle-active': theme === 'light' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" width="25px" height="25px">
                <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke-width="1.5" />
                <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="mx-auto app-layout-grid gap-6 px-4 pb-16 pt-6 sm:px-6">
      <aside class="sidebar-aside">
        <Sidebar :items="navTree" :current-path="currentPath" />
      </aside>
      <main id="main-content" ref="mainRef" tabindex="-1" class="min-w-0 focus:outline-none">
        <div class="mobile-nav-wrapper">
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

<style scoped>

</style>
