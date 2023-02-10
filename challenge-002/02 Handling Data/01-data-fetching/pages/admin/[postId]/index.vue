<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/components/admin/AdminPostForm.vue";

definePageMeta({
  layout: "admin",
});

const loadedPost = ref<Post>({
  author: "Paul",
  title: "My awesome Post",
  content: "Super amazing, thanks for that!",
  thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
});
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
