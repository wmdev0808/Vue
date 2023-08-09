<script setup lang="ts">
// import team from '@/team.json'
import TeamHeader from '@/components/teams/TeamHeader.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
import TeamFooter from '@/components/teams/TeamFooter.vue'

import { useTeamStore } from '@/stores/team'

const team = useTeamStore()

team.fill()

// Example of calling a store action.
// setTimeout(() => {
//   team.grow(25)
// }, 2000)
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>
