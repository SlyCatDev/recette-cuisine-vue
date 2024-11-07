<template>
  <div>
    <h1>Ajoute un repas :</h1>
    <form @submit.prevent="ajouterRecette">
      <input v-model="nom" placeholder="Nom de la recette" />
      <textarea v-model="description" placeholder="Description"></textarea>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const nom = ref('');
    const description = ref('');

    const ajouterRecette = async () => {
      await axios.post('http://localhost:3000/recettes', {
        nom: nom.value,
        description: description.value
      });
    };

    return { nom, description, ajouterRecette };
  }
});
</script>
