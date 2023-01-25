<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
// import type { RouteLocationNormalizedLoaded } from "vue-router";

import type Team from "@/types/Team";
import type { User } from "@/types/User";

import UserItem from "@/components/users/UserItem.vue";

export default defineComponent({
  setup() {
    const teams = inject<Team[]>("teams");
    const users = inject<User[]>("users");

    return { teams, users };
  },
  components: {
    UserItem,
  },
  props: {
    teamId: {
      type: String,
      required: true,
    },
    sort: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      teamName: "",
      members: [] as User[],
    };
  },
  methods: {
    // loadTeamMembers(route: RouteLocationNormalizedLoaded) {
    //   const teamId = route.params.teamId;
    //   const selectedTeam = this.teams?.find((team) => team.id === teamId)!;
    //   const members = selectedTeam.members;
    //   const selectedMembers = [];
    //   for (const member of members) {
    //     const selectedUser = this.users?.find((user) => user.id === member)!;
    //     selectedMembers.push(selectedUser);
    //   }
    //   this.members = selectedMembers;
    //   this.teamName = selectedTeam.name;
    // },
    loadTeamMembers(teamId: string) {
      const selectedTeam = this.teams?.find((team) => team.id === teamId)!;
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users?.find((user) => user.id === member)!;
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // this.$route.path // /teams/t1
    // this.loadTeamMembers(this.$route);
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    console.log("TeamMembers Cmp beforeRouteUpdate");
    console.log(to, from);
    // this.loadTeamMembers(to.params.teamId as string);
    next();
  },
  watch: {
    // $route(newRoute: RouteLocationNormalizedLoaded) {
    //   this.loadTeamMembers(newRoute);
    // },
    teamId(newId: string) {
      this.loadTeamMembers(newId);
    },
  },
});
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
