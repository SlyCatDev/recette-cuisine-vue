<template>
  <Layout>
    <template #header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Site de Recettes</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/todolist">TodoList</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </template>

    <template #aside>
      Sidebar
    </template>

    <template #main>
      <main class="container mt-4">
      <router-view />

      <!--TEST-->
      <input type="text" v-model="page.title">
    </main>
    </template>

    <template #footer>
      Footer
    </template>
</Layout>
</template>

<script lang="ts" setup>
import Layout from './LayoutPage.vue';

import { ref, watchEffect } from 'vue';

const page = ref({
  title:''
});

watchEffect(() => {
  document.title = page.value.title
})

</script>

<style>
</style>