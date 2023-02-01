<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
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
