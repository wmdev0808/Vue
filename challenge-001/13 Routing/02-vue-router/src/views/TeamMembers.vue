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
  </section>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

import type Team from "@/types/Team";
import type { User } from "@/types/User";

import UserItem from "../components/users/UserItem.vue";

export default defineComponent({
  setup() {
    const teams = inject<Team[]>("teams");
    const users = inject<User[]>("users");

    return { teams, users };
  },
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: "",
      members: [] as User[],
    };
  },
  created() {
    // this.$route.path // /teams/t1
    const teamId = this.$route.params.teamId;
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
