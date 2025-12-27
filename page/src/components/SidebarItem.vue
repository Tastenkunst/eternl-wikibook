<script setup lang="ts">
import { computed } from 'vue';
import type { NavItem } from '@/lib/content';

defineOptions({ name: 'SidebarItem' });

const props = defineProps<{ item: NavItem; currentPath: string }>();

const normalizedCurrent = computed(() => normalizePath(props.currentPath));
const hasChildren = computed(() => props.item.children.length > 0);
const isActive = computed(() =>
  props.item.routePath ? normalizedCurrent.value === props.item.routePath : false
);
const isExpanded = computed(() =>
  props.item.routePath
    ? normalizedCurrent.value.startsWith(props.item.routePath + '/')
    : false
);
const linkProps = computed(() => {
  if (props.item.routePath) {
    return { to: props.item.routePath };
  }
  if (props.item.external) {
    return { href: props.item.href, target: '_blank', rel: 'noreferrer' };
  }
  return {};
});

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
}
</script>

<template>
  <li>
    <component
      :is="item.routePath ? 'RouterLink' : item.external ? 'a' : 'span'"
      v-bind="linkProps"
      :aria-current="isActive ? 'page' : undefined"
      class="flex items-start gap-2 rounded-lg px-2 py-1 transition"
      :class="[
        isActive
          ? 'bg-ink text-ivory shadow-sm'
          : 'text-ink-80 hover:bg-ink-5',
        isExpanded && !isActive ? 'font-medium text-ink' : ''
      ]"
    >
      <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full" :class="isActive ? 'bg-ivory' : 'bg-ink-30'"></span>
      <span class="leading-snug">{{ item.title }}</span>
    </component>

    <ul v-if="hasChildren" class="mt-2 space-y-2 pl-4">
      <SidebarItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :current-path="currentPath"
      />
    </ul>
  </li>
</template>
