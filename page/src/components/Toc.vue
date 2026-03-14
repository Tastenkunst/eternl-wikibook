<script setup lang="ts">
import type { TocItem } from '@/lib/content';
import TocItemRow from '@/components/TocItem.vue';

defineProps<{ items: TocItem[] }>();
</script>

<template>
  <nav
    class="rounded-2xl border border-ink-10 bg-ivory-70 p-4 text-sm shadow-soft"
    aria-label="On this page"
  >
    <p class="mb-3 text-xs uppercase tracking-[0.3em] text-ink-50">On this page</p>
    <ul class="space-y-2">
      <TocItemRow v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </nav>
</template>
