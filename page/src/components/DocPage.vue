<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { getDocByRoute, getPrevNext } from '@/lib/content';
import Toc from '@/components/Toc.vue';

const route = useRoute();

const routePath = computed(() => normalizePath(route.path));
const doc = computed(() => getDocByRoute(routePath.value));
const prevNext = computed(() => getPrevNext(routePath.value));

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
}
</script>

<template>
  <section v-if="doc" class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
    <article class="doc-card">
      <div v-if="doc.cover" class="mb-6 overflow-hidden rounded-2xl border border-ink-10">
        <img :src="doc.cover" alt="" class="h-48 w-full object-cover" />
      </div>

      <header class="mb-8">
        <p v-if="doc.description" class="text-sm text-ink-70">{{ doc.description }}</p>
        <h1 class="font-display text-3xl text-ink sm:text-4xl">{{ doc.title }}</h1>
      </header>

      <div class="mb-8 lg:hidden" v-if="doc.toc.length">
        <Toc :items="doc.toc" />
      </div>

      <div class="doc-content" v-html="doc.html"></div>

      <div class="mt-12 flex items-center justify-between gap-4 border-t border-ink-10 pt-6 text-sm">
        <RouterLink
          v-if="prevNext.prev"
          :to="prevNext.prev.routePath"
          class="rounded-full border border-ink-20 px-4 py-2 transition hover:border-ink-40"
        >
          ← {{ prevNext.prev.title }}
        </RouterLink>
        <span v-else></span>
        <RouterLink
          v-if="prevNext.next"
          :to="prevNext.next.routePath"
          class="rounded-full border border-ink-20 px-4 py-2 text-right transition hover:border-ink-40"
        >
          {{ prevNext.next.title }} →
        </RouterLink>
      </div>
    </article>

    <aside class="hidden lg:block">
      <Toc v-if="doc.toc.length" :items="doc.toc" />
    </aside>
  </section>

  <section v-else class="doc-card">
    <h1 class="font-display text-2xl">Page not found</h1>
    <p class="mt-2 text-sm text-ink-70">The requested page is not in SUMMARY.md.</p>
  </section>
</template>
