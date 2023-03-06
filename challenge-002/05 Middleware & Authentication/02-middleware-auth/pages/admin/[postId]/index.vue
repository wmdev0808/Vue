<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { NuxtError } from "#app";
import { Post } from "~~/components/admin/AdminPostForm.vue";
import { useRootStore } from "~~/stores/root";

definePageMeta({
  layout: "admin",
  middleware: ["check-auth", "auth"],
});

const config = useRuntimeConfig();
const route = useRoute();
const rootStore = useRootStore();

const loadedPost = ref<Post>();

const { data, error } = await useAsyncData<Post, NuxtError>(
  `admin-${route.params.postId}`,
  () => $fetch(`${config.public.apiBase}/posts/${route.params.postId}.json`)
);

if (error.value) {
  throw createError({ fatal: true, message: error.value?.message });
}

loadedPost.value = { ...data.value!, id: route.params.postId as string };

function onSubmitted(editedPost: Post) {
  rootStore.updatePost(editedPost).then(async () => {
    await navigateTo("/admin");
  });
}
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
