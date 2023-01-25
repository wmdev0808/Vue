<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
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
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push("/teams");
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("UsersList Cmp beforeRouteEnter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("UsersList Cmp beforeRouteLeave");
    console.log(to, from);

    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        "Are you sure? You got unsaved changes!"
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log("unmounted");
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
