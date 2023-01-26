<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    addOne() {
      // this.$store.state.counter++;
      // this.$store.commit("increase", { value: 10 });
      // this.$store.commit({ type: "increase", value: 10 });
      // this.$store.dispatch("increase", { value: 10 });
      // this.$store.dispatch({ type: "increase", value: 10 });
      this.$store.dispatch({ type: "numbers/increase", value: 10 });
    },
  },
});
</script>

<script setup lang="ts">
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import UserAuth from "./components/UserAuth.vue";
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
