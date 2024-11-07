import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import RecettePage from '@/views/RecettePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/recettes',
    name: 'Recette',
    component: RecettePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
