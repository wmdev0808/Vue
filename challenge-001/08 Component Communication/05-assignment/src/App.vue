<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      user: {
        name: "Max Schwarzmüller",
        age: 31,
      },
    };
  },
  methods: {
    setUserData(name: string, age: string) {
      this.user = {
        name: name,
        age: +age,
      };
    },
  },
});
</script>

<script setup lang="ts">
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
</script>

<style scoped>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
