<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from 'vue';

import type { StepsCarouselItem } from '@/lib/content';

const props = withDefaults(defineProps<{
  items: StepsCarouselItem[];
  title?: string;
  showSteps?: boolean;
  start?: number;
}>(), {
  title: '',
  showSteps: false,
  start: 1
});

const activeIndex = ref(0);
const lightboxOpen = ref(false);
const runtimeImageError = ref<string | undefined>();
const imageAspectRatios = ref<Record<string, number>>({});
const closeButton = ref<HTMLButtonElement | null>(null);
const imageButton = ref<HTMLButtonElement | null>(null);
const previousFocus = ref<HTMLElement | null>(null);

const carouselId = `steps-carousel-${Math.random().toString(36).slice(2, 9)}`;

const activeStep = computed(() => props.items[activeIndex.value]);
const hasPrevious = computed(() => activeIndex.value > 0);
const hasNext = computed(() => activeIndex.value < props.items.length - 1);
const activeError = computed(() => runtimeImageError.value || activeStep.value?.error);
const imageFrameStyle = computed(() => {
  const imageSrc = activeStep.value?.imageSrc;
  const aspectRatio = imageSrc ? imageAspectRatios.value[imageSrc] : undefined;
  return aspectRatio ? { aspectRatio: `${aspectRatio}` } : undefined;
});
const stepNumber = (index: number) => props.start + index;
const totalStepNumber = computed(() => props.start + props.items.length - 1);
const activeStepNumber = computed(() => stepNumber(activeIndex.value));
const activeStepLabel = computed(() => {
  const title = activeStep.value?.title || `Item ${activeIndex.value + 1}`;
  return props.showSteps
    ? `${title}, ${activeStepNumber.value} of ${totalStepNumber.value}`
    : title;
});

watch(() => props.items.length, (length) => {
  if (length === 0) {
    activeIndex.value = 0;
    return;
  }
  activeIndex.value = Math.min(activeIndex.value, length - 1);
});

watch(activeIndex, () => {
  runtimeImageError.value = undefined;
});

function goTo(index: number) {
  if (index < 0 || index >= props.items.length || index === activeIndex.value) {
    return;
  }
  activeIndex.value = index;
}

function goPrevious() {
  if (hasPrevious.value) {
    goTo(activeIndex.value - 1);
  }
}

function goNext() {
  if (hasNext.value) {
    goTo(activeIndex.value + 1);
  }
}

function handleCarouselKeydown(event: KeyboardEvent) {
  if (lightboxOpen.value) {
    return;
  }
  if (event.key === 'ArrowLeft' && hasPrevious.value) {
    event.preventDefault();
    goPrevious();
  } else if (event.key === 'ArrowRight' && hasNext.value) {
    event.preventDefault();
    goNext();
  }
}

let gestureStart: { x: number; y: number } | null = null;

function handlePointerStart(event: PointerEvent) {
  if (event.pointerType === 'mouse' && event.buttons !== 1) {
    gestureStart = null;
    return;
  }
  gestureStart = { x: event.clientX, y: event.clientY };
}

function handlePointerEnd(event: PointerEvent) {
  if (!gestureStart) {
    return;
  }

  const deltaX = event.clientX - gestureStart.x;
  const deltaY = event.clientY - gestureStart.y;
  gestureStart = null;

  if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) {
    return;
  }

  if (deltaX < 0) {
    goNext();
  } else {
    goPrevious();
  }
}

function handleImageError() {
  runtimeImageError.value = 'The image could not be loaded.';
}

function handleImageLoad(event: Event) {
  const image = event.currentTarget as HTMLImageElement;
  const imageSrc = activeStep.value?.imageSrc;
  if (imageSrc && image.naturalWidth && image.naturalHeight) {
    imageAspectRatios.value[imageSrc] = image.naturalWidth / image.naturalHeight;
  }
}

async function openLightbox() {
  if (activeError.value || !activeStep.value?.imageSrc) {
    return;
  }

  previousFocus.value = document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null;
  lightboxOpen.value = true;
  document.body.classList.add('steps-lightbox-open');
  await nextTick();
  closeButton.value?.focus();
}

function closeLightbox() {
  lightboxOpen.value = false;
  document.body.classList.remove('steps-lightbox-open');
  nextTick(() => {
    if (previousFocus.value && document.contains(previousFocus.value)) {
      previousFocus.value.focus();
    } else {
      imageButton.value?.focus();
    }
  });
}

function handleGlobalKeydown(event: KeyboardEvent) {
  if (!lightboxOpen.value) {
    return;
  }
  if (event.key === 'Escape') {
    event.preventDefault();
    closeLightbox();
  } else if (event.key === 'ArrowLeft' && hasPrevious.value) {
    event.preventDefault();
    goPrevious();
  } else if (event.key === 'ArrowRight' && hasNext.value) {
    event.preventDefault();
    goNext();
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleGlobalKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleGlobalKeydown);
  document.body.classList.remove('steps-lightbox-open');
});
</script>

<template>
  <section
    class="steps-carousel"
    role="region"
    aria-roledescription="carousel"
    :aria-label="props.showSteps ? 'Step-by-step guide' : 'Image carousel'"
    :aria-labelledby="[props.showSteps ? `${carouselId}-status` : '', props.title ? `${carouselId}-title` : ''].filter(Boolean).join(' ') || undefined"
    tabindex="0"
    @keydown="handleCarouselKeydown"
    @pointerdown="handlePointerStart"
    @pointerup="handlePointerEnd"
  >
    <div class="steps-carousel__meta">
      <div v-if="props.showSteps" :id="`${carouselId}-status`" class="steps-carousel__status" aria-live="polite">
        {{ activeStepNumber }}/{{ totalStepNumber }}
      </div>
      <h2 v-if="props.title" :id="`${carouselId}-title`" class="steps-carousel__carousel-title">{{ props.title }}</h2>
    </div>

    <article
      v-if="activeStep"
      class="steps-carousel__slide"
      role="group"
      aria-roledescription="slide"
      :aria-label="activeStepLabel"
    >
      <h3 v-if="activeStep.titleHtml" class="steps-carousel__title" v-html="activeStep.titleHtml"></h3>

      <div v-if="activeStep.bodyHtml" class="steps-carousel__body" v-html="activeStep.bodyHtml"></div>

      <div v-if="activeError" class="steps-carousel__error" role="alert">
        <strong>Item {{ activeIndex + 1 }} cannot be displayed.</strong>
        <span>{{ activeError }}</span>
      </div>

      <button
        v-else
        ref="imageButton"
        type="button"
        class="steps-carousel__image-button"
        :style="imageFrameStyle"
        :aria-label="`Enlarge image: ${activeStep.title || activeStep.imageAlt || `Item ${activeIndex + 1}`}`"
        @click="openLightbox"
      >
        <img
          :src="activeStep.imageSrc"
          :alt="activeStep.imageAlt"
          :loading="activeIndex === 0 ? 'eager' : 'lazy'"
          draggable="false"
          @load="handleImageLoad"
          @error="handleImageError"
        />
      </button>
    </article>

    <nav v-if="props.items.length > 1" class="steps-carousel__navigation" :aria-label="props.showSteps ? 'Step navigation' : 'Carousel navigation'">
      <button
        v-if="hasPrevious"
        type="button"
        class="steps-carousel__arrow"
        aria-label="Previous item"
        @click="goPrevious"
      >
        <span aria-hidden="true">←</span>
      </button>
      <span v-else class="steps-carousel__arrow-placeholder" aria-hidden="true"></span>

      <div class="steps-carousel__indicators" :aria-label="props.showSteps ? 'Select step' : 'Select item'">
        <button
          v-for="(_, index) in props.items"
          :key="index"
          type="button"
          class="steps-carousel__indicator"
          :class="{ 'is-active': index === activeIndex }"
          :aria-label="`${props.showSteps ? 'Show step' : 'Show item'} ${stepNumber(index)}`"
          :aria-current="index === activeIndex ? 'step' : undefined"
          @click="goTo(index)"
        >
          <span v-if="props.showSteps">{{ stepNumber(index) }}</span>
          <span v-else class="steps-carousel__indicator-dot" aria-hidden="true"></span>
        </button>
      </div>

      <button
        v-if="hasNext"
        type="button"
        class="steps-carousel__arrow"
        aria-label="Next item"
        @click="goNext"
      >
        <span aria-hidden="true">→</span>
      </button>
      <span v-else class="steps-carousel__arrow-placeholder" aria-hidden="true"></span>
    </nav>
  </section>

  <Teleport to="body">
    <div
      v-if="lightboxOpen && activeStep && !activeError"
      class="steps-lightbox-overlay"
      @click.self="closeLightbox"
      @pointerdown="handlePointerStart"
      @pointerup="handlePointerEnd"
    >
      <div
        class="steps-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="activeStepLabel"
      >
        <header class="steps-lightbox__header">
          <div class="steps-lightbox__heading">
            <div class="steps-lightbox__meta">
              <div v-if="props.showSteps" class="steps-lightbox__status">{{ activeStepNumber }}/{{ totalStepNumber }}</div>
              <div v-if="props.title" class="steps-lightbox__carousel-title">{{ props.title }}</div>
            </div>
            <h2 v-if="activeStep.titleHtml" class="steps-lightbox__title" v-html="activeStep.titleHtml"></h2>
          </div>
          <button
            ref="closeButton"
            type="button"
            class="steps-lightbox__close"
            aria-label="Close image view"
            @click="closeLightbox"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div class="steps-lightbox__content">
          <button
            v-if="hasPrevious"
            type="button"
            class="steps-lightbox__arrow"
            aria-label="Previous item"
            @click="goPrevious"
          >
            <span aria-hidden="true">←</span>
          </button>
          <span v-else class="steps-lightbox__arrow-placeholder" aria-hidden="true"></span>

          <img :src="activeStep.imageSrc" :alt="activeStep.imageAlt" @load="handleImageLoad" @error="handleImageError" />

          <button
            v-if="hasNext"
            type="button"
            class="steps-lightbox__arrow"
            aria-label="Next item"
            @click="goNext"
          >
            <span aria-hidden="true">→</span>
          </button>
          <span v-else class="steps-lightbox__arrow-placeholder" aria-hidden="true"></span>
        </div>

        <div v-if="activeStep.bodyHtml" class="steps-lightbox__description" v-html="activeStep.bodyHtml"></div>
      </div>
    </div>
  </Teleport>
</template>
