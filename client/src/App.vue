<template>
<div>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/todolist">TodoList</router-link>
    </nav>
    <router-view /> <!-- Affiche la page correspondante -->
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
nav {
  display: flex;
  gap: 10px;
}
</style>