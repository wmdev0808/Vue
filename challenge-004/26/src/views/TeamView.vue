<script setup lang="ts">
import team from '@/team.json'
import TeamHeader from '@/components/teams/TeamHeader.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
import TeamFooter from '@/components/teams/TeamFooter.vue'
</script>

<template>
  <TeamHeader :team="team" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers :team="team" />
  </div>

  <TeamFooter :team="team" />
</template>
