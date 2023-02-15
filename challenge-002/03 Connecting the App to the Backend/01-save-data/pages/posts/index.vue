<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/components/admin/AdminPostForm.vue";
import { useRootStore } from "~~/stores/root";

// const { data: loadedPosts } = useAsyncData(() => {
//   return new Promise<Post[]>((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: "1",
//           title: "First Post",
//           previewText: "This is our first post!",
//           thumbnail:
//             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
//         },
//         {
//           id: "2",
//           title: "Second Post",
//           previewText: "This is our second post!",
//           thumbnail:
//             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
//         },
//       ]);
//       // reject(new Error());
//     }, 1000);
//   })
//     .then((data) => {
//       console.log(`data received: => `, data);
//       return data;
//     })
//     .catch((e) => {
//       console.log(`error occurred: => `, e);
//       throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
//       // showError("Error occurred");
//     });
// });

const rootStore = useRootStore();
const loadedPosts = computed(() => rootStore.loadedPosts);
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
