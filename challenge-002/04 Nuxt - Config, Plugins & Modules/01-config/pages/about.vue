<template>
  <div>About page</div>
  <p>{{ resolvedData }}</p>
</template>

<script setup lang="ts">
const { data: resolvedData } = useAsyncData(() => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("resolved!");
    }, 3000);
  });
});
</script>
