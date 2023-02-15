<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/components/admin/AdminPostForm.vue";

definePageMeta({
  layout: "admin",
});

const config = useRuntimeConfig();

function onSubmitted(postData: Post) {
  $fetch(`${config.public.apiBase}/posts.json`, {
    method: "POST",
    body: postData,
  })
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
