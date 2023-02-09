<template>
  <h1>A single user, with ID: {{ route.params.id }}</h1>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
