<template>
  <div>
    <h1>Bienvenue sur la page d'accueil</h1>
    <p>Ceci est la page principale de votre site.</p>
    <router-link to="/Todolist">Aller à la page Todolist</router-link>
  </div>

  
  <p>Compteur : {{ count }}</p>
  <button @click="increment">Incrémenter</button>
  <button @click="decrement">Décrementer</button>
  <hr>
  <button @click="sortMovies">Réorganiser</button>
  <form action="" @submit.prevent="addRecette">
    <input type="text" placeholder="Nouvelle Recette" 
    v-model="recetteName">
    <button>Ajouter</button>
  </form>
  <ul>
    <li 
    v-for="recette in recettes" 
    :key="recette"
    >
      {{ recette }} <button @click="deleteRecette(recette)">supprimer</button>
    </li>
  </ul>
  </template>
  
<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
const recettes = ref([
  'Nouille avec steak maïs poivrons',
  'Pizzas',
  'Risotto Crozet',
  'Poulet à la crème - riz '
]);
const recetteName = ref('');

const increment = () => {
  count.value++
};

const decrement = () => {
  count.value--
};

const deleteRecette = (recette: string) => {
  recettes.value = recettes.value.filter(m => m != recette)
};

const sortMovies = () => {
  recettes.value.sort((a,b) => a > b ? 1 : -1)
  };

const addRecette = () => {
  recettes.value.push(recetteName.value)
  recetteName.value = ''
};

  </script>

<style scoped>
.active{
  color : red;
}
.completed {
opacity: .5;
  text-decoration: line-through;
}
</style>
