<template>
  <div>
    <h1>Boustifaille</h1>
    <h2>Site de plat fait maison</h2>

  <!-- Bouton pour réorganiser les recettes -->
  <button @click="sortRecettes">Réorganiser</button>

  <!-- Formulaire pour ajouter une recette -->
  <form action="" @submit.prevent="addRecette">
    <input type="text" placeholder="Nouvelle Recette" v-model="recetteName"/>
    <button>Ajouter</button>
  </form>

  <!-- Liste des recettes -->
  <ul>
    <li v-for="recette in recettes" :key="recette">
      {{ recette }} 
      <button @click="deleteRecette(recette)">supprimer</button>
    </li>
  </ul>

  <!-- Affichage des recettes provenant de la base de données -->
  <h3 class="mt-4">Recettes sauvegardées dans la base de données :</h3>
    <RecipeCard />
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import RecipeCard from '../components/RecipeCard.vue'; // Import du composant RecipeCard



// Gestion des recettes locales
const recettes = ref<string[]>([]);
const recetteName = ref<string>('');

const deleteRecette = (recette: string) => {
  recettes.value = recettes.value.filter((r) => r !== recette);
};

const sortRecettes = () => {
  recettes.value.sort((a, b) => (a > b ? 1 : -1));
};

const addRecette = () => {
  if (recetteName.value.trim() !== '') {
    recettes.value.push(recetteName.value.trim());
    recetteName.value = '';
  }
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

/* Style basique */
h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

form {
  margin-bottom: 1rem;
}

button {
  margin-left: 0.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}
</style>
