<template>
  <div>
    <div>Post state: {{ resDataSuccess }}</div>
    <div>Get Data: {{ resData.text }}</div>
  </div>
</template>

<script setup lang="ts">
const { data: resDataSuccess } = await useFetch("/api/redis", {
  method: "post",
  body: { text: "Nuxt is Awesome!" },
});
const { data: resData } = await useFetch("/api/redis");
</script>
