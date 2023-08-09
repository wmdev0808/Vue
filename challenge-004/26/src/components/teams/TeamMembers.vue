<script setup lang="ts">
import type { Team } from '@/types/teams'
import TeamMember from './TeamMember.vue'

defineProps<{ team: Team }>()
</script>

<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
      <th class="text-left px-6 py-2">Name</th>
      <th class="text-left px-6 py-2">Email</th>
      <th class="text-left px-6 py-2">Status</th>
    </thead>

    <tbody>
      <TeamMember
        v-for="member in team.members"
        :key="member.email"
        :name="member.name"
        :email="member.email"
        :status="member.status"
      />
    </tbody>
  </table>

  <p class="text-right text-gray-600 italic" v-show="team.members.length === team.spots">
    There are no remaining team spots. Upgrade to add more.
  </p>
</template>
