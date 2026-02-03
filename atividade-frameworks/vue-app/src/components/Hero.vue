<template>
  <header class="hero">
    <div class="hero-inner">
      <div class="avatar">
        <img :src="imageUrl" alt="Foto de perfil" />
      </div>

      <div class="hero-text">
        <h1>{{ name }}</h1>
        <p>
          Sou estudante de tecnologia, apaixonado por programação e segurança da
          informação. Quero viajar o mundo, aprender coisas novas e evoluir
          sempre — construindo projetos, explorando ideias e me desafiando a cada
          passo.
        </p>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  name: { type: String, default: "Vitor" },
  imageUrl: { type: String, required: true },
});
</script>
