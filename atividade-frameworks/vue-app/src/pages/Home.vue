<template>
  <main>
    <Hero
      name="Vitor"
      imageUrl="https://i.pinimg.com/originals/bb/8d/4f/bb8d4f05506d83b9f825dc1f47e835ac.jpg"
    />
    <PostList :posts="posts" />
  </main>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import PostList from "../components/PostList.vue";

const posts = [
  {
    id: 1,
    title: "5 hábitos para evoluir em programação",
    subtitle:
      "Organização, prática diária e projetos reais: o caminho mais rápido para melhorar de verdade.",
  },
  {
    id: 2,
    title: "5 fundamentos para começar em segurança da informação",
    subtitle:
      "Senhas, backups, redes e boas práticas: uma base sólida antes de partir para ferramentas.",
  },
  {
    id: 3,
    title: "5 dicas para montar um portfólio na área de tecnologia",
    subtitle:
      "Mostre projetos simples, documente bem e explique o que você aprendeu em cada etapa.",
  },
];
</script>
