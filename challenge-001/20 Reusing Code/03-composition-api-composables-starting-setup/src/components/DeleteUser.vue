<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserAlert from "./UserAlert.vue";

const alertIsVisible = ref<boolean>(false);

function showAlert() {
  alertIsVisible.value = true;
}
function hideAlert() {
  alertIsVisible.value = false;
}
</script>
