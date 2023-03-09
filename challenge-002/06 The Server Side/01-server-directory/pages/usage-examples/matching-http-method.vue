<template>
  <h1>Matching HTTP Method</h1>
  <div>
    <button @click="onGet">GET request</button>
    <button @click="onPost">POST request</button>
  </div>
  <div>
    <h2>Response:</h2>
    <div>{{ resp }}</div>
  </div>
</template>

<script setup lang="ts">
const resp = ref<string | null>(null);

async function onGet() {
  const { data } = await useFetch<string | null>("/api/test");
  resp.value = data.value;
}

async function onPost() {
  const data = await $fetch<string>("/api/test", {
    method: "POST",
  });
  resp.value = data;
}
</script>
