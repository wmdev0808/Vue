<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail"
      >Thumbnail Link</AppControlInput
    >
    <AppControlInput control-type="textarea" v-model="editedPost.content"
      >Content</AppControlInput
    >
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>

<script setup lang="ts">
export interface Post {
  id?: string;
  author?: string;
  title: string;
  thumbnail: string;
  previewText?: string;
  content?: string;
  updatedDate?: Date;
}

const { post } = defineProps<{ post?: Post }>();

const editedPost = ref<Post>(
  post ? { ...post } : { author: "", title: "", thumbnail: "", content: "" }
);

function onSave() {
  // Save the post
  console.log(editedPost);
}

async function onCancel() {
  // Navigate back
  await navigateTo("/admin");
}
</script>
