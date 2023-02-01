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
import UserAlert from "./UserAlert.vue";

import useAlert from "@/hooks/alert";

const [alertIsVisible, showAlert, hideAlert] = useAlert();
</script>
