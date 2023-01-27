<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
