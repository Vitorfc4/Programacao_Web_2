<template>
  <nav class="nav">
    <div class="nav-inner">
      <RouterLink to="/">Blog</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
      <RouterLink to="/descricao">Descrição</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
