<script setup lang="ts">
defineOptions({ name: 'SidebarItem' });

import {
  computed,
  ref,
  watch,
  onMounted,
  onUnmounted
}                             from 'vue';
import { RouterLink }         from 'vue-router';

import type { NavItem }       from '@/lib/content';
import { getIconPath }        from '@/lib/icons';

const props                   = defineProps<{ item: NavItem; currentPath: string; depth?: number }>();

const depth                   = computed(() => props.depth ?? 0);
const normalizedCurrent       = computed(() => normalizePath(props.currentPath));

const expanded                = ref(containsRoute(props.item, normalizedCurrent.value));

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

function handleRowClick(): void {
  if (props.item.children.length) {
    expanded.value = true; // Immer aufklappen beim Navigieren
  }
  // Die Navigation selbst passiert automatisch durch den RouterLink im Template
}

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

const collapseSelf = () => {
  expanded.value = false;
};

onMounted(() => {
  window.addEventListener('wiki:collapse-nav', collapseSelf);
});

onUnmounted(() => {
  window.removeEventListener('wiki:collapse-nav', collapseSelf);
});
</script>

<template>
  <li>
    <div
      class="sidebar-item-row"
      :class="[{ 'sidebar-item-row-active': isActive }, depth > 0 ? 'sidebar-item-nested' : '']"
      role="button"
      @click="handleRowClick"
    >
<!--      <img-->
<!--        v-if="item.children.length"-->
<!--        class="sidebar-chevron sidebar-chevron-icon"-->
<!--        :src="iconSrc"-->
<!--        alt="Toggle section"-->
<!--        aria-hidden="true"-->
<!--        @click.stop="toggle"-->
<!--      />-->
      <div
          v-if="item.children.length"
          class="sidebar-chevron sidebar-chevron-icon"
          :class="{ 'is-open': expanded }"
          aria-hidden="true"
          @click.stop="toggle"
      ></div>
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
<style scoped>
.sidebar-item-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  user-select: none;
}

.sidebar-item-row:hover {
  /*background-color: color-mix(in srgb, var(--color-border) 8%, var(--color-panel));*/
  background-color: var(--color-link-hover);
}

.sidebar-item-row-active {
  /*background-color: color-mix(in srgb, var(--color-warning) 10%, var(--color-panel));*/
}

.sidebar-link {
  flex: 1;
  font-size: 0.9rem;
  color: var(--color-text);
}

.sidebar-link-active {
  color: var(--color-primary);
  font-weight: 600;
}

.sidebar-children {
  list-style: none;
  margin: 0;
  padding: 0 0 0 0.85rem;
  border-left: 1px solid color-mix(in srgb, var(--color-border) 30%, transparent);
}

.sidebar-chevron {
  width: 0.75rem;
  height: 0.75rem;
  background-color: currentColor;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.sidebar-chevron-icon {
  -webkit-mask-image: url('/gitbook-assets/icons/ChevronDown.svg');
  mask-image: url('/gitbook-assets/icons/ChevronDown.svg');
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  transition: filter 0.2s ease;
  transform: rotate(-90deg);
}
.sidebar-chevron-icon.is-open{
  transform: rotate(0deg);
}

.sidebar-chevron-placeholder {
  width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
  opacity: 0;
}

.sidebar-item-nested .sidebar-item-row {
  padding-left: 0.25rem;
}
</style>
