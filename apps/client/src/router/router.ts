import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue"; // Chemin vers le composant HomePage
import TodoList from "@/views/TodoList.vue";// Chemin vers le composant TodoList

const routes = [
  { 
    path: "/", 
    name: "Home", 
    component: HomePage 
  },
  { 
    path: "/todolist", 
    name: "todolist", 
    component: TodoList 
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;