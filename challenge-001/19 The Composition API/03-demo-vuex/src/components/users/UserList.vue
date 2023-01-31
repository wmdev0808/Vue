<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

import UserItem from "./UserItem.vue";
import type User from "@/types/User";

const props = defineProps<{ users: User[] }>();

const enteredSearchTerm = ref<string>("");
const activeSearchTerm = ref<string>("");
const sorting = ref<"asc" | "desc" | null>(null);

const availableUsers = computed<User[]>(() => {
  if (activeSearchTerm.value) {
    return props.users.filter((usr) =>
      usr.fullName.includes(activeSearchTerm.value)
    );
  }
  return props.users;
});

const displayedUsers = computed<User[]>(() => {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === "asc" && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === "asc") {
      return -1;
    } else if (sorting.value === "desc" && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

function updateSearch(val: string) {
  enteredSearchTerm.value = val;
}

function sort(mode: "asc" | "desc") {
  sorting.value = mode;
}

watch(enteredSearchTerm, (newVal, _oldVal) => {
  setTimeout(() => {
    if (newVal === enteredSearchTerm.value) {
      activeSearchTerm.value = newVal;
    }
  }, 300);
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
