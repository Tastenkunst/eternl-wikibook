<script setup lang="ts">
import {
  computed,
  ref,
  onMounted,
  onUnmounted,
  watch
}                             from 'vue';
import { useRouter }          from 'vue-router';
import {
  searchIndex,
  type SearchEntry
}                             from '@/lib/content';

const router                  = useRouter();
const query                   = ref('');
const searchContainer         = ref<HTMLElement | null>(null);
const selectedIndex           = ref(-1);

const results = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (q.length < 2) return [] as SearchEntry[];
  return searchIndex
      .filter((entry) => entry.title.toLowerCase().includes(q) || entry.text.toLowerCase().includes(q))
      .slice(0, 8);
});

watch(results, () => {
  selectedIndex.value = -1;
});

const showDropdown = computed(() => query.value.trim().length >= 2);

function closeSearch() {
  query.value = '';
  selectedIndex.value = -1;
}

function goTo(entry: SearchEntry): void {
  closeSearch();
  router.push(entry.routePath);
}

function handleClickOutside(event: MouseEvent) {
  if (searchContainer.value && !searchContainer.value.contains(event.target as Node)) {
    closeSearch();
  }
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    closeSearch();
    return;
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault(); // Verhindert Cursor-Bewegung im Input
    if (selectedIndex.value < results.value.length - 1) {
      selectedIndex.value++;
    }
  }
  else if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (selectedIndex.value > 0) {
      selectedIndex.value--;
    }
  }
  else if (event.key === 'Enter') {
    if (results.value.length > 0) {
      // Wenn nichts selektiert ist (-1), nimm den ersten Eintrag (0)
      const indexToOpen = selectedIndex.value >= 0 ? selectedIndex.value : 0;
      goTo(results.value[indexToOpen]);
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const formatPath = (path: string) => path.replaceAll('/content/', '');
</script>

<template>
  <form
      ref="searchContainer"
      class="relative w-full sm:w-64"
      role="search"
      @submit.prevent
  >
    <label class="sr-only" for="doc-search">Search documentation</label>
    <input
        id="doc-search"
        v-model="query"
        type="search"
        placeholder="Search docs"
        class="w-full rounded-full border border-ink-40 px-4 py-2 text-sm text-ink shadow-sm outline-none transition focus:border-ink-40"
        @keydown="onKeydown"
    />

    <div
        v-if="showDropdown"
        class="absolute right-0 top-full z-20 mt-2 w-full overflow-hidden rounded-2xl border border-ink-10 bg-ivory-95 shadow-soft"
    >
      <div v-if="results.length" class="overflow-auto p-2">
        <button
            v-for="(entry, index) in results"
            :key="entry.routePath"
            type="button"
            class="w-full rounded-xl px-3 py-2 text-left text-sm transition"
            :class="{ 'bg-active-selection': selectedIndex === index, 'text-ink-80': selectedIndex !== index }"
            @click="goTo(entry)"
            @mouseenter="selectedIndex = index"
        >
          <span class="font-medium text-ink">{{ entry.title }}</span>
          <p class="text-xs text-ink-60">{{ formatPath(entry.routePath) }}</p>
        </button>
      </div>
      <p v-else class="px-3 py-3 text-xs text-ink-60">No results yet.</p>
    </div>
  </form>
</template>

<style scoped>

#doc-search {
  background: var(--color-bg-search);
}

.bg-active-selection,
button:hover {
  background: var(--color-link-hover);
  cursor: pointer;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 0.75rem;
  width: 0.75rem;
  background-color: currentColor;
  -webkit-mask-image: url("/gitbook-assets/icons/Cancel01.svg");
  mask-image: url("/gitbook-assets/icons/Cancel01.svg");
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  cursor: pointer;
}
</style>
