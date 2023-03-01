<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id!"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText || post.content!.slice(0, 10)"
    />
  </section>
</template>

<script setup lang="ts">
import { Post } from "../admin/AdminPostForm.vue";

defineProps({
  isAdmin: {
    type: Boolean,
    default: false,
  },
  posts: {
    type: Object as PropType<Post[] | null>,
  },
});
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
