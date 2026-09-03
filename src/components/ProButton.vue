<script setup lang="ts">
import { computed } from 'vue';

type ProButtonSize = 'header' | 'normal' | 'large';

const props = withDefaults(defineProps<{
  label?: string;
  size?: ProButtonSize;
  href?: string;
  target?: '_self' | '_blank';
  title?: string;
}>(), {
  label: 'Pro',
  size: 'normal',
  href: undefined,
  target: '_self',
  title: undefined,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const elementTag = computed(() => props.href ? 'a' : 'span');
const interactive = computed(() => Boolean(props.href));
const sizeClass = computed(() => `eternl-pro-button--${props.size}`);
const externalLink = computed(() => props.target === '_blank');

function handleClick(event: MouseEvent) {
  emit('click', event);
}
</script>

<template>
  <component
    :is="elementTag"
    :href="href"
    :target="href ? target : undefined"
    :rel="href && externalLink ? 'noreferrer' : undefined"
    :title="title"
    :aria-label="title || label"
    class="eternl-pro-button"
    :class="[sizeClass, { 'eternl-pro-button--interactive': interactive }]"
    @click="interactive ? handleClick : undefined"
  >
    <span class="eternl-pro-button__animation" aria-hidden="true"></span>

    <span class="eternl-pro-button__surface">
      <img
        class="eternl-pro-button__logo"
        src="/assets/pictures/eternl-logo-small-vector.png"
        alt=""
        aria-hidden="true"
      >
      <span class="eternl-pro-button__label">{{ label }}</span>
    </span>
  </component>
</template>

<style scoped>
@property --eternl-pro-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.eternl-pro-button {
  --eternl-pro-colors: #44fff9, #7188ff, #ff5178, #ffb719, #d153d1, #44fff9;
  --eternl-pro-surface: var(--color-panel, #202020);
  --eternl-pro-text: var(--color-text, #cbcbcb);

  position: relative;
  isolation: isolate;
  box-sizing: border-box;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1px;
  border: 0;
  border-radius: 999px;
  color: var(--eternl-pro-text);
  font: inherit;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  cursor: default;
}

:global(.doc-card > header h1 .eternl-pro-button),
:global(.doc-content h1 .eternl-pro-button),
:global(.doc-content h2 .eternl-pro-button),
:global(.doc-content h3 .eternl-pro-button),
:global(.doc-section-summary h2 .eternl-pro-button) {
  height: 1.75rem;
  margin-inline-start: 0.35em;
  font-size: 0.9375rem;
  line-height: 1;
  vertical-align: middle;
}

.eternl-pro-button--interactive {
  cursor: pointer;
  transition: color 160ms ease, transform 160ms ease;
}

.eternl-pro-button--interactive:hover {
  color: var(--color-text-hover, var(--eternl-pro-text));
}

.eternl-pro-button--interactive:active {
  transform: translateY(1px);
}

.eternl-pro-button--interactive:focus-visible {
  outline: 2px solid var(--color-accent, #38bdf8);
  outline-offset: 3px;
}

.eternl-pro-button__animation {
  position: absolute;
  inset: -200%;
  z-index: -1;
  background: conic-gradient(
    from var(--eternl-pro-angle),
    var(--eternl-pro-colors)
  );
  animation: eternl-pro-gradient-rotate 3s linear infinite;
}

.eternl-pro-button__surface {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100%;
  gap: 0.25rem;
  border-radius: inherit;
  background: var(--eternl-pro-surface);
  padding: 0.25rem 0.75rem 0.25rem 0.375rem;
  transition: background-color 160ms ease;
}

.eternl-pro-button--interactive:hover .eternl-pro-button__surface {
  background: color-mix(in srgb, var(--eternl-pro-surface) 90%, transparent);
}

.eternl-pro-button__logo {
  display: block;
  width: 1rem;
  height: 1rem;
  margin: 0;
  border: 0;
  border-radius: 0;
  object-fit: contain;
}

.eternl-pro-button__label {
  display: block;
}

.eternl-pro-button--header {
  height: 2rem;
  font-size: 0.875rem;
}

.eternl-pro-button--header .eternl-pro-button__logo {
  width: 1.25rem;
  height: 1.25rem;
}

.eternl-pro-button--large {
  height: 2.375rem;
  font-size: 1rem;
}

.eternl-pro-button--large .eternl-pro-button__surface {
  padding-right: 1rem;
  padding-left: 0.75rem;
}

.eternl-pro-button--large .eternl-pro-button__logo {
  width: 1.5rem;
  height: 1.5rem;
}

@keyframes eternl-pro-gradient-rotate {
  to {
    --eternl-pro-angle: 360deg;
  }
}

@media (prefers-reduced-motion: reduce) {
  .eternl-pro-button__animation {
    animation: none;
  }

  .eternl-pro-button--interactive,
  .eternl-pro-button--interactive .eternl-pro-button__surface {
    transition: none;
  }
}
</style>
