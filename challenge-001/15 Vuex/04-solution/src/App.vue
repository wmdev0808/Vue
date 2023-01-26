<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import TheHeader from "@/components/nav/TheHeader.vue";
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
