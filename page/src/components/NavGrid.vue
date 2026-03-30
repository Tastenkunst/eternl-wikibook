<template>
  <div class="child-nav-grid">
    <router-link
        v-for="item in items"
        :key="item.routePath"
        :to="item.routePath"
        class="child-nav-card group no-underline"
    >
      <div class="child-nav-main-content">
        <div
            v-if="item.icon"
            class="child-nav-icon"
            :style="{ '--gb-icon': `url(${item.icon})` }"
        ></div>

        <div class="child-nav-title">{{ item.title }}</div>
      </div>

      <span class="child-nav-arrow">→</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    title: string;
    routePath: string;
    icon?: string;
  }>
}>();
</script>
<style scoped>
.child-nav-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 2rem 0;
}

@media (min-width: 640px) {
  .child-nav-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.child-nav-card {
  display: block;
  position: relative;
  padding: 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-card);
  text-decoration: none !important;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.child-nav-main-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 2rem; /* Platz für den absoluten Pfeil */
}

.child-nav-icon {
  width: 2rem;
  height: 2rem;
  /*background-color: var(--color-secondary);*/
  background-color: var(--color-text);
  filter: brightness(var(--heading-muted-brightness));
  -webkit-mask-image: var(--gb-icon);
  mask-image: var(--gb-icon);
  -webkit-mask-size: contain;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.child-nav-card:hover {
  border-color: var(--color-border-strong);
  background-color: var(--color-card-hover);
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}

.child-nav-content-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}


.child-nav-card:hover .child-nav-icon {
  filter: brightness(1);
  /*background-color: var(--color-secondary);*/
  background-color: var(--color-text);
}

.child-nav-title {
  display: block;
  font-weight: 600;
  font-size: 1.1rem;
  /*color: var(--color-secondary);*/
  color: var(--color-text);
  filter: brightness(var(--heading-muted-brightness));
}

.child-nav-card:hover .child-nav-title {
  /*color: var(--color-secondary);*/
  color: var(--color-text);
  filter: brightness(1);
}

.child-nav-subtitle {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.child-nav-arrow {
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  /*color: var(--color-secondary);*/
  color: var(--color-text);
  opacity: 0;
  transition: all 0.2s ease;
}

.child-nav-card:hover .child-nav-arrow {
  opacity: 1;
  right: 1rem;
}
</style>
