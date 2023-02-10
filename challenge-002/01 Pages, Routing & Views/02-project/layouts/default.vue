<template>
  <div>
    <NavHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <NavSideNav :show="displaySidenav" @close="displaySidenav = false" />
    <slot />
  </div>
</template>

<script setup lang="ts">
const displaySidenav = ref(false);
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
}
</style>
