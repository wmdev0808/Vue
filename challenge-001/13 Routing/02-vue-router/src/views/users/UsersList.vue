<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    confirmInput() {
      // do something
      this.$router.push("/teams");
    },
  },
});
</script>

<script setup lang="ts">
import { inject } from "vue";

import UserItem from "@/components/users/UserItem.vue";
import type { User } from "@/types/User";

const users = inject<User[]>("users");
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
