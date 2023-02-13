<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="emit('close')"></div>
    <Transition name="slide-side">
      <div v-if="show" class="sidenav">
        <ul class="nav-list" @click="emit('close')">
          <li class="nav-item"><NuxtLink to="/posts">Blog</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/about">About</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/admin">Admin</NuxtLink></li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{ (e: "close"): void }>();
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter-from,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}
</style>
