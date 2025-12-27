<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { searchIndex, type SearchEntry } from '@/lib/content';

const router = useRouter();
const query = ref('');

const results = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (q.length < 2) {
    return [] as SearchEntry[];
  }
  return searchIndex
    .filter((entry) => entry.title.toLowerCase().includes(q) || entry.text.toLowerCase().includes(q))
    .slice(0, 8);
});

const showDropdown = computed(() => query.value.trim().length >= 2);

function goTo(entry: SearchEntry): void {
  query.value = '';
  router.push(entry.routePath);
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Enter' && results.value.length) {
    goTo(results.value[0]);
  }
}
</script>

<template>
  <form class="relative w-full sm:w-64" role="search" @submit.prevent>
    <label class="sr-only" for="doc-search">Search documentation</label>
    <input
      id="doc-search"
      v-model="query"
      type="search"
      placeholder="Search docs"
      class="w-full rounded-full border border-ink-20 bg-ivory px-4 py-2 text-sm shadow-sm outline-none transition focus:border-ink-40"
      @keydown="onKeydown"
    />

    <div
      v-if="showDropdown"
      class="absolute right-0 top-full z-20 mt-2 w-full overflow-hidden rounded-2xl border border-ink-10 bg-ivory-95 shadow-soft"
    >
      <div v-if="results.length" class="max-h-64 overflow-auto p-2">
        <button
          v-for="entry in results"
          :key="entry.routePath"
          type="button"
          class="w-full rounded-xl px-3 py-2 text-left text-sm text-ink-80 transition hover:bg-ink-5"
          @click="goTo(entry)"
        >
          <p class="font-medium text-ink">{{ entry.title }}</p>
          <p class="text-xs text-ink-60">{{ entry.routePath }}</p>
        </button>
      </div>
      <p v-else class="px-3 py-3 text-xs text-ink-60">No results yet.</p>
    </div>
  </form>
</template>
