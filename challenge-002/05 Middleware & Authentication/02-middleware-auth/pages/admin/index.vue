<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="navigateToNewPost">Create Post</AppButton>
      <AppButton style="margin-left: 10px" @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList is-admin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "~~/stores/root";

definePageMeta({
  layout: "admin",
  middleware: ["check-auth", "auth"],
});

const rootStore = useRootStore();

const loadedPosts = computed(() => rootStore.loadedPosts);

async function navigateToNewPost() {
  return navigateTo("/admin/new-post");
}

async function onLogout() {
  rootStore.logout();
  await navigateTo("/admin/auth");
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
