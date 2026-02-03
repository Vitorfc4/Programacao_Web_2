<template>
  <section class="blog-section">
    <div class="blog-inner">
      <div class="blog-content">
        <h2>Últimas do blog</h2>

        <div class="posts">
          <PostItem
            v-for="p in posts"
            :key="p.id"
            :title="p.title"
            :subtitle="p.subtitle"
          />
        </div>

        <a class="see-all" href="#">Ver tudo</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import PostItem from "./PostItem.vue";

defineProps({
  posts: { type: Array, default: () => [] },
});
</script>
