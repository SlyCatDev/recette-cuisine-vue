<template>
<div>
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
    <main class="container mt-4">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
main {
  min-height: calc(100vh - 140px);
}
nav {
  display: flex;
  gap: 10px;
}
</style>