<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  watch,
  nextTick
}                             from 'vue';
import { useRoute }           from 'vue-router';
import type { NavItem }       from '@/lib/content';
import Sidebar                from '@/components/Sidebar.vue';

const props = defineProps<{ items: NavItem[]; currentPath: string }>();
const isOpen = ref(false);
const isSticky = ref(false);
const showScrollHint = ref(false);
const morphBodyRef = ref<HTMLElement | null>(null);
const route = useRoute();

let resizeObserver: ResizeObserver | null = null;

const handleMenuHeightChange = () => {
  if (!morphBodyRef.value) return;
  const el = morphBodyRef.value;
  showScrollHint.value = el.scrollHeight > (el.clientHeight + el.scrollTop + 5);
};

watch(isOpen, async (opened) => {
  if (opened) {
    document.body.style.overflow = 'hidden';

    await nextTick();
    if (morphBodyRef.value) {
      handleMenuHeightChange();
      morphBodyRef.value.addEventListener('scroll', handleMenuHeightChange);
      resizeObserver = new ResizeObserver(handleMenuHeightChange);
      const content = morphBodyRef.value.firstElementChild;
      if (content) resizeObserver.observe(content);
    }
  } else {
    document.body.style.overflow = '';

    morphBodyRef.value?.removeEventListener('scroll', handleMenuHeightChange);
    resizeObserver?.disconnect();
  }
});

const handleScroll = () => {
  isSticky.value = window.scrollY > 12;
};

const handleResize = () => {
  if (window.innerWidth > 760 && isOpen.value) isOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  resizeObserver?.disconnect();
  document.body.style.overflow = '';
});

watch(() => route.path, () => { isOpen.value = false; });
</script>

<template>
  <div class="mobile-nav-root">

    <button
        class="nav-trigger shadow-soft"
        :class="{ 'is-sticky': isSticky, 'is-compact': isSticky, 'is-hidden': isOpen }"
        @click="isOpen = true"
    >
      <div class="burger-icon-wrapper">
        <div class="burger-icon"></div>
      </div>
      <span class="trigger-label text-sm font-bold">Contents</span>
    </button>

    <Teleport to="body">
      <Transition name="mobile-nav-transition">
        <div v-if="isOpen" class="morph-overlay">
          <div class="morph-backdrop" @click="isOpen = false"></div>

          <div :class="['morph-container', { 'origin-compact': isSticky }]">
            <nav class="morph-content shadow-soft" :class="{ 'has-scroll-hint': showScrollHint }">
              <div class="morph-body" ref="morphBodyRef">
                <Sidebar :items="items" :current-path="currentPath" />
              </div>
            </nav>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.mobile-nav-root {
  min-height: 48px;
  margin-bottom: 2rem;
  position: relative;
}

.nav-trigger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 48px;
  padding: 0 1.25rem;
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  color: var(--color-text);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-trigger.is-sticky {
  position: fixed !important;
  top: 69px;
  left: 0.5rem;
  z-index: 999;
  width: 48px;
  padding: 0;
  justify-content: center;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-panel) 95%, white 5%);
  border-color: var(--color-border-strong);
}

@media (min-width: 640px) {
  .nav-trigger.is-sticky { left: 1.5rem; }
}

.burger-icon {
  width: 20px;
  height: 20px;
  background-color: var(--color-text);
  -webkit-mask-image: url("/assets/icons/Menu.svg");
  mask-image: url("/assets/icons/Menu.svg");
  mask-size: contain;
  mask-repeat: no-repeat;
}

.trigger-label {
  white-space: nowrap;
  color: var(--color-text);
  transition: opacity 0.2s;
}

.is-compact .trigger-label { display: none; }
.is-hidden { opacity: 0; pointer-events: none; }

.morph-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
}

.morph-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
}

.morph-container {
  position: relative;
  z-index: 10001;
  transform-origin: 32px 91px;
}

.origin-compact {
  transform-origin: 24px 71px !important;
}

.morph-content {
  background: var(--color-border-mobile-nav);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  width: 320px;
  max-width: calc(100vw - 2rem);
  max-height: 95dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.morph-content::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(to top, var(--color-bg), transparent);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.morph-content.has-scroll-hint::after {
  opacity: 1;
}

.morph-body {
  flex: 1;
  overflow-y: auto;
  margin: 3px;
  border: 1px solid var(--color-bg);
  border-radius: 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background: var(--color-bg)
}

.morph-body::-webkit-scrollbar {
  display: none;
}

.mobile-nav-transition-enter-active,
.mobile-nav-transition-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-transition-enter-active .morph-backdrop,
.mobile-nav-transition-leave-active .morph-backdrop {
  transition: opacity 0.3s ease-in-out;
}
.mobile-nav-transition-enter-from .morph-backdrop,
.mobile-nav-transition-leave-to .morph-backdrop {
  opacity: 0;
}

.mobile-nav-transition-enter-active .morph-container,
.mobile-nav-transition-leave-active .morph-container {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-transition-enter-from .morph-container,
.mobile-nav-transition-leave-to .morph-container {
  transform: scale(0.12);
  opacity: 0;
}

.mobile-nav-transition-enter-from .morph-body {
  opacity: 0;
}
</style>
