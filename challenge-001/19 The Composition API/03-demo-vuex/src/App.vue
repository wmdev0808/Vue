<template>
  <main>
    <user-list :users="activeUsers" @list-projects="selectUser"></user-list>
    <project-list :user="selectedUser"></project-list>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

import UserList from "./components/users/UserList.vue";
import ProjectList from "./components/projects/ProjectList.vue";

import USER_DATA from "./dummy-data.js";
import type User from "./types/User";

const selectedUser = ref<User | null>(null);
const activeUsers = ref<User[]>(USER_DATA);

function selectUser(uid: string) {
  selectedUser.value = activeUsers.value.find((usr) => usr.id === uid)!;
}
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

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>
