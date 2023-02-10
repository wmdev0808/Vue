<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author Name</AppControlInput
        >
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink"
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
    </section>
  </div>
</template>

<script setup lang="ts">
interface PostInput {
  author: string;
  title: string;
  thumbnailLink: string;
  content: string;
}

const editedPost = ref<PostInput>({
  author: "",
  title: "",
  thumbnailLink: "",
  content: "",
});

function onSave() {
  // Save the post
  console.log(editedPost.value);
}

async function onCancel() {
  // Navigate back
  await navigateTo("/admin");
}
</script>
