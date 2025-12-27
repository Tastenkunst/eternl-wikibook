<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { navTree } from '@/lib/content';
import Sidebar from '@/components/Sidebar.vue';
import SearchBox from '@/components/SearchBox.vue';
import MobileNav from '@/components/MobileNav.vue';

const route = useRoute();
const currentPath = computed(() => route.path);
const mainRef = ref<HTMLElement | null>(null);

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
  <div class="min-h-screen bg-sand text-ink">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="border-b border-ink-10 bg-ivory-80 backdrop-blur">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-ink-60">Eternl</p>
          <p class="font-display text-2xl text-ink">Wiki Viewer</p>
          <p class="text-sm text-ink-70">Support documentation for the Cardano ecosystem.</p>
        </div>
        <SearchBox />
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

    <footer class="border-t border-ink-10 bg-ivory-70">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-xs text-ink-60 sm:px-6">
        <span>Read-only viewer. Edit Markdown in WebStorm or VSCode.</span>
        <span>Generated from SUMMARY.md and GitBook content.</span>
      </div>
    </footer>
  </div>
</template>
