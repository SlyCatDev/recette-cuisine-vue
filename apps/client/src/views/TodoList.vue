<template>
<div>
    <h1>Todolist + test</h1>
    <router-link to="/">Retour à l'accueil</router-link>
  </div>

  <p>Compteur : {{ count }}</p>
  <button @click="increment">Incrémenter</button>
  <button @click="decrement">Décrementer</button>
  <hr>

       <!-- Todolist -->
  <form action="" @submit.prevent="addTask">
    <fieldset role="group">
      <input 
      v-model="newtask" 
      type="text" 
      placeholder="Nouvelle tâche">
      <button :disabled="newtask.length == 0">Ajouter</button>
    </fieldset>
  </form>
  
  
  <div 
    style="padding-top:1rem" 
    v-if="tasks.length == 0">Aucune tâche pour ce jour
  </div>
  <div v-else>
    <ul>
      <li 
    v-for="task in filteredTasks"
    :key="task.date"
    :class="{completed: task.completed }"
      >
      <CheckBox 
        :label="task.title" 
        v-model="task.completed"
       />
      </li>
    </ul>
    <label>
        <input type="checkbox" v-model="hideCompleted">
        Masquer les tâches complétées
    </label>
    <p v-if="remainingTasks > 0">
      {{ remainingTasks }} tâche{{ remainingTasks > 1 ? 's' : ''}} à faire
    </p>
  </div>
  </template>
  
  <script lang="ts" setup>

  import { ref, computed  } from 'vue';
  import CheckBox from '@/components/CheckBox.vue';

  const count = ref(0);
  
  const increment = () => {
  count.value++
};

  const decrement = () => {
  count.value--
};

   // Définition du type pour une tâche
  interface task {
    title: string;
    completed: boolean;
    date: number;
  }
  
  /* 
  TodoList
  
  - On affiche un message si il n'y a pas de tâche
  - On a en haut un champ texte avec un bouton "Ajouter" pour ajouter nouvelle tâche
  - Pour chaque tâche, on a une case à cocher pour marquer la tâche comme faite
  - Une tâche terminée sera barrée (CSS)
  - On affiche les tâches à faire en premier 
  - Une case à cocher permet de masquer les tâches terminées
  */ 
  
// Nouvelle tâche (input)
  const newtask = ref<string>('');

  const hideCompleted = ref<boolean>(false);

  // Liste des tâches
  const tasks = ref<task[]>([]);

  // Fonction pour ajouter une tâche
  const addTask = (): void => { 
    tasks.value.push({
      title: newtask.value,
      completed: false,
      date: Date.now(),
    });
  
    newtask.value = ""; // Réinitialise l'entrée
  };

// Filtrer les tâches en fonction de la case à cocher
const filteredTasks = computed(() => {
  return tasks.value.filter(task => !hideCompleted.value || !task.completed);
});
const remainingTasks = computed(() => {
  return tasks.value.filter(t => t.completed == false).length
});
  </script>
  
  <style scoped>
  .completed {
  opacity: .5;
    text-decoration: line-through;
  }
  </style>