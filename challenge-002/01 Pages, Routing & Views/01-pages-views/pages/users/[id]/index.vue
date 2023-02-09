<template>
  <h1>A single user, with ID: {{ route.params.id }}</h1>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "users",
  validate: async (route) => {
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id as string);
  },
});

const route = useRoute();
</script>
