<script setup lang="ts">
defineOptions({ name: 'SidebarItem' });
import { computed, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import type { NavItem } from '@/lib/content';
import { getIconPath } from '@/lib/icons';

const props = defineProps<{ item: NavItem; currentPath: string; depth?: number }>();

const depth = computed(() => props.depth ?? 0);
const normalizedCurrent = computed(() => normalizePath(props.currentPath));

const expanded = ref(containsRoute(props.item, normalizedCurrent.value));

watch(
  () => normalizedCurrent.value,
  (value) => {
    if (containsRoute(props.item, value)) {
      expanded.value = true;
    }
  }
);

const isActive = computed(() => {
  if (!props.item.routePath) {
    return false;
  }
  return normalizedCurrent.value === props.item.routePath;
});

const iconName = computed(() => (expanded.value ? 'ChevronDown' : 'ChevronRight'));
const iconSrc = computed(() => getIconPath(iconName.value));

function toggle(): void {
  if (!props.item.children.length) {
    return;
  }
  expanded.value = !expanded.value;
}

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
}

function containsRoute(item: NavItem, target: string): boolean {
  if (item.routePath && item.routePath === target) {
    return true;
  }
  return item.children.some((child) => containsRoute(child, target));
}
</script>

<template>
  <li>
    <div
      class="sidebar-item-row"
      :class="[{ 'sidebar-item-row-active': isActive }, depth > 0 ? 'sidebar-item-nested' : '']"
      role="button"
      @click="toggle"
    >
      <img
        v-if="item.children.length"
        class="sidebar-chevron sidebar-chevron-icon"
        :src="iconSrc"
        alt="Toggle section"
        aria-hidden="true"
        @click.stop="toggle"
      />
      <span v-else class="sidebar-chevron-placeholder"></span>

      <RouterLink
        v-if="item.routePath"
        :to="item.routePath"
        class="sidebar-link"
        :class="isActive ? 'sidebar-link-active' : ''"
      >
        {{ item.title }}
      </RouterLink>
      <span v-else class="sidebar-link">{{ item.title }}</span>
    </div>

    <ul v-if="item.children.length && expanded" class="sidebar-children">
      <SidebarItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :current-path="currentPath"
        :depth="depth + 1"
      />
    </ul>
  </li>
</template>
