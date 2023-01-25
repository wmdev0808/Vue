<template>
  <router-view></router-view>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
</template>

<script lang="ts">
export default {};
</script>

<script setup lang="ts">
import { inject } from "vue";

import type Team from "@/types/Team";
import TeamsItem from "@/components/teams/TeamsItem.vue";

const teams = inject<Team[]>("teams");
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
