<template>
    <div class="container mt-4">
      <div class="row">
        <h2 class="text-center mb-4">Liste des recettes</h2>
        <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="col-md-4 mb-4"
        >
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ recipe.nom }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  interface Recipe {
    id: number;
    nom: string;
  }
  
  export default defineComponent({
    name: 'RecipeCard',
    setup() {
      const recipes = ref<Recipe[]>([]);
  
      const fetchRecipes = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/recipes');
          recipes.value = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des recettes', error);
        }
      };
  
      onMounted(fetchRecipes);
  
      return {
        recipes,
      };
    },
  });
  </script>
  
  <style scoped>
  .card {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  