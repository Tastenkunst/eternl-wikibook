import { createRouter, createWebHistory } from 'vue-router';
import DocPage from '@/components/DocPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'doc',
      component: DocPage
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: prefersReducedMotion ? 'auto' : 'smooth' };
    }
    return { top: 0 };
  }
});

export default router;
