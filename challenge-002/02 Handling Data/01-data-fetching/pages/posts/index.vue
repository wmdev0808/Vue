<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/components/admin/AdminPostForm.vue";

const { data: loadedPosts } = useAsyncData(() => {
  return new Promise<Post[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "First Post",
          previewText: "This is our first post!",
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
        },
        {
          id: "2",
          title: "Second Post",
          previewText: "This is our second post!",
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
        },
      ]);
    }, 1000);
  });
});
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
