<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { NavItem } from '@/lib/content';
import Sidebar from '@/components/Sidebar.vue';

const props = defineProps<{ items: NavItem[]; currentPath: string }>();
const isOpen = ref(false);
const isSticky = ref(false);
const route = useRoute();

// 1. Der Watcher: Kontrolliert das Scrollen der Hintergrundseite
watch(isOpen, (newValue) => {
  if (typeof document !== 'undefined') {
    if (newValue) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
});

const handleScroll = () => {
  isSticky.value = window.scrollY > 80;
};

// 2. Der Resize-Handler: Schließt das Menü, wenn das Fenster zu breit wird
const handleResize = () => {
  if (window.innerWidth > 760 && isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  // WICHTIG: Falls die Komponente zerstört wird, Scrollen wieder erlauben
  document.body.style.overflow = '';
});

watch(() => route.path, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="mobile-nav-root" ref="navRootRef">
    <button
        class="nav-trigger shadow-soft"
        :class="{ 'is-sticky': isSticky, 'is-compact': isSticky, 'is-hidden': isOpen }"
        @click="isOpen = true"
    >
      <div class="burger-icon-wrapper">
        <div class="burger-icon"></div>
      </div>
      <span class="trigger-label text-sm font-bold">Navigation</span>
    </button>

    <Teleport to="body">
      <Transition name="mobile-nav-transition">
        <div v-if="isOpen" class="morph-overlay">
          <div class="morph-backdrop" @click="isOpen = false"></div>

          <div :class="['morph-container', { 'origin-compact': isSticky }]">
            <nav class="morph-content shadow-soft">
              <div class="morph-body">
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

/* BUTTON STYLING */
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-trigger.is-sticky {
  position: fixed !important;
  top: 1rem;
  left: 1rem;
  z-index: 999;
  width: 48px;
  padding: 0;
  justify-content: center;
  border-radius: 50%;
  /* Leicht transparent für modernen Glas-Look */
  background: color-mix(in srgb, var(--color-panel) 90%, white 5%);
  border-color: var(--color-border-strong);
}

@media (min-width: 640px) {
  .nav-trigger.is-sticky { left: 1.5rem; }
}

.burger-icon {
  width: 20px;
  height: 20px;
  background-color: var(--color-text);
  -webkit-mask-image: url("/gitbook-assets/icons/Menu.svg");
  mask-image: url("/gitbook-assets/icons/Menu.svg");
  mask-size: contain;
  mask-repeat: no-repeat;
}

.trigger-label {
  white-space: nowrap;
  transition: opacity 0.2s;
}

.is-compact .trigger-label { display: none; }
.is-hidden { opacity: 0; pointer-events: none; }

/* MODAL & OVERLAY */
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
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}

.morph-container {
  position: relative;
  z-index: 10001;
  /* Default Origin: Wenn Button noch Text hat */
  transform-origin: 32px 24px;
}

.origin-compact {
  /* Origin: Wenn Button rund (Sticky) ist */
  transform-origin: 24px 24px !important;
}

.morph-content {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  width: 320px;
  max-width: calc(100vw - 2rem);
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.morph-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 1rem;
}

/* TRANSITIONS */

/* 1. Backdrop Fade */
.fade-backdrop-enter-active, .fade-backdrop-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-backdrop-enter-from, .fade-backdrop-leave-to {
  opacity: 0;
}

/* 2. Panel Morph (Wachsen/Schrumpfen) */
.panel-morph-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.panel-morph-leave-active {
  /* Gegenläufiges Schrumpfen beim Schließen */
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.panel-morph-enter-from, .panel-morph-leave-to {
  transform: scale(0.12);
  opacity: 0;
  border-radius: 50%;
}

.panel-morph-enter-to, .panel-morph-leave-from {
  transform: scale(1);
  opacity: 1;
  border-radius: 20px;
}

/* Sidebar Inhalt leicht verzögert faden */
.panel-morph-enter-active .morph-body {
  transition: opacity 0.2s ease-out 0.15s;
}
.panel-morph-enter-from .morph-body {
  opacity: 0;
}
.mobile-nav-transition-enter-active,
.mobile-nav-transition-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 1. BACKDROP EFFEKT */
.mobile-nav-transition-enter-active .morph-backdrop,
.mobile-nav-transition-leave-active .morph-backdrop {
  transition: opacity 0.3s ease;
}
.mobile-nav-transition-enter-from .morph-backdrop,
.mobile-nav-transition-leave-to .morph-backdrop {
  opacity: 0;
}

/* 2. PANEL EFFEKT (MORPH) */
.mobile-nav-transition-enter-active .morph-container,
.mobile-nav-transition-leave-active .morph-container {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-transition-enter-from .morph-container,
.mobile-nav-transition-leave-to .morph-container {
  transform: scale(0.1);
  opacity: 0;
}

/* Origin-Handling wie besprochen */
.morph-container {
  transform-origin: 32px 24px;
}
.origin-compact {
  transform-origin: 24px 24px !important;
}

/* Optional: Inhalt im Panel verzögert einblenden */
.mobile-nav-transition-enter-active .morph-body {
  transition: opacity 0.2s ease 0.2s;
}
.mobile-nav-transition-enter-from .morph-body {
  opacity: 0;
}
</style>
