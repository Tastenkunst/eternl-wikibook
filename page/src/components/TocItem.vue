<script setup lang="ts">
import type { TocItem } from '@/lib/content';

defineOptions({ name: 'TocItem' });

defineProps<{ item: TocItem }>();
</script>

<template>
  <li>
    <a
      :href="`#${item.id}`"
      class="block rounded-md px-2 py-1 text-ink-70 transition hover:bg-ink-5 hover:text-ink"
    >
      {{ item.title }}
    </a>
    <ul v-if="item.children.length" class="mt-2 space-y-2 pl-4">
      <TocItem v-for="child in item.children" :key="child.id" :item="child" />
    </ul>
  </li>
</template>
