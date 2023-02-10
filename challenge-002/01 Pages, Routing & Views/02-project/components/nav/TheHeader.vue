<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="emit('sidenavToggle')" />
      <div class="logo">
        <NuxtLink to="/">WD BLOG</NuxtLink>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><NuxtLink to="/posts">Blog</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/about">About</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/admin">Admin</NuxtLink></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: "sidenavToggle"): void }>();
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
