<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/components/admin/AdminPostForm.vue";
import { useRootStore } from "~~/stores/root";

definePageMeta({
  layout: "admin",
});

const config = useRuntimeConfig();
const rootStore = useRootStore();

function onSubmitted(postData: Post) {
  rootStore.createPost(postData).then(async () => {
    await navigateTo("/admin");
  });
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
