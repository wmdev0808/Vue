<template>
  <div>
    <p>Nuxt index page</p>
    <p>{{ config.public.apiBase }}</p>
  </div>
  >
</template>
<script setup lang="ts">
useHead({
  title: "Index page title",
});

const config = useRuntimeConfig();
</script>
