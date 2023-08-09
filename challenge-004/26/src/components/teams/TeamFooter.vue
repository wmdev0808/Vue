<script setup lang="ts">
import type { Team } from '@/types/teams'

defineProps<{ team: Team }>()
</script>

<template>
  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
  </footer>
</template>
