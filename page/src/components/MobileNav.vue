<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { NavItem } from '@/lib/content';
import Sidebar from '@/components/Sidebar.vue';

const props = defineProps<{ items: NavItem[]; currentPath: string }>();
const detailsRef = ref<HTMLDetailsElement | null>(null);
const route = useRoute();

watch(
  () => route.path,
  () => {
    if (detailsRef.value) {
      detailsRef.value.open = false;
    }
  }
);
</script>

<template>
  <details ref="detailsRef" class="rounded-2xl border border-ink-10 bg-ivory-70 p-4 shadow-soft">
    <summary class="cursor-pointer rounded-full border border-ink-20 px-4 py-2 text-sm font-medium text-ink">
      Browse contents
    </summary>
    <div class="mt-4">
      <Sidebar :items="items" :current-path="currentPath" />
    </div>
  </details>
</template>
