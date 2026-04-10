import { createApp }          from 'vue';
import App                    from './App.vue';
import router                 from './router';
import { initWiki }           from './lib/content'
import './styles.css';

// createApp(App).use(router).mount('#app');

async function start() {
  await initWiki();

  const app = createApp(App).use(router);

  app.mount('#app')
}

start();
