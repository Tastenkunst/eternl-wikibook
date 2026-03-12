<script setup lang="ts">
import type { NavItem } from '@/lib/content';
import SidebarItem from '@/components/SidebarItem.vue';

const props = defineProps<{ items: NavItem[]; currentPath: string }>();
</script>

<template>
  <nav class="rounded-2xl border border-ink-10 bg-ivory-70 p-4 shadow-soft" aria-label="Main navigation">
    <p class="mb-3 text-xs uppercase tracking-[0.3em] text-ink-50">Contents</p>
    <ul class="sidebar-list text-sm">
      <SidebarItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        :current-path="currentPath"
        :depth="0"
      />
    </ul>
  </nav>
</template>
