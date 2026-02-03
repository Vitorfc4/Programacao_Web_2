<template>
  <article class="post">
    <h3>{{ title }}</h3>
    <p>{{ subtitle }}</p>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
});
</script>
