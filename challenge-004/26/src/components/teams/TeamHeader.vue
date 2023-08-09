<script setup lang="ts">
import { useTeamStore } from '@/stores/team'

const emit = defineEmits<{ (event: 'add'): void }>()

const team = useTeamStore()

function addMember() {
  emit('add')
}
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="team.members.length === team.spots"
        @click="addMember"
      >
        Add Member ({{ team.spots - team.members.length }} Spots Left)
      </button>
    </div>

    <div>
      <div class="inline-flex items-center text-3xl relative">
        <img src="/smiley.png" alt="" class="mr-2 w-10" />
        <h3>{{ team.name }} Team</h3>
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ team.spots }}
        </div>
      </div>
    </div>
  </header>
</template>
