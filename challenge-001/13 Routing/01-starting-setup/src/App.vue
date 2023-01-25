<template>
  <the-navigation @set-page="setActivePage"></the-navigation>
  <main>
    <component :is="activePage"></component>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Role from "./types/Role";
import type Team from "./types/Team";
import type { User } from "./types/User";

import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TheNavigation from "./components/nav/TheNavigation.vue";

export default defineComponent({
  components: {
    TheNavigation,
    TeamsList,
    UsersList,
  },
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
  methods: {
    setActivePage(page: string) {
      this.activePage = page;
    },
  },
});
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
