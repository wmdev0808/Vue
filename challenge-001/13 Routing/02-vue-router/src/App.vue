<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Role from "./types/Role";
import type Team from "./types/Team";
import type { User } from "./types/User";

export default defineComponent({
  data() {
    return {
      activePage: "teams-list",
      teams: [
        { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
        { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u3"] },
        { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
      ] as Team[],
      users: [
        { id: "u1", fullName: "Max Schwarz", role: Role.ENGINEER },
        { id: "u2", fullName: "Praveen Kumar", role: Role.ENGINEER },
        { id: "u3", fullName: "Julie Jones", role: Role.ENGINEER },
        { id: "u4", fullName: "Alex Blackfield", role: Role.CONSULTANT },
        { id: "u5", fullName: "Marie Smith", role: Role.CONSULTANT },
      ] as User[],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
});
</script>

<script setup lang="ts">
import TheNavigation from "./components/nav/TheNavigation.vue";
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

<!-- <script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
