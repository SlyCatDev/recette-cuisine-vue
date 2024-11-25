<template>
  <div>
    <h1>Boustifaille</h1>
    <h2>Site de plat fait maison</h2>
  </div>

  <button @click="sortRecettes">Réorganiser</button>
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

const recettes = ref([
  'Nouille avec steak maïs poivrons',
  'Pizzas',
  'Risotto Crozet',
  'Poulet à la crème - riz '
]);
const recetteName = ref('');

const deleteRecette = (recette: string) => {
  recettes.value = recettes.value.filter(m => m != recette)
};

const sortRecettes = () => {
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
