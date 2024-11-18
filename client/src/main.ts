// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';  // Assure-toi que ce chemin est correct

createApp(App)
  .use(router)
  .mount('#app');