<template>
  <div>
    <p>Nuxt index page</p>
    <p>{{ config.public.apiBase }}</p>

    <div v-for="todo in todos">
      {{ todo }}
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Index page title",
});

const config = useRuntimeConfig();

const { data: todos } = useAsyncData(() => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(["task01", "task02"]);
    }, 3000);
  });
});
</script>
