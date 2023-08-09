import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Member, Team } from '@/types/teams'

export const useTeamStore = defineStore('team', () => {
  // state
  const name = ref('')
  const spots = ref(0)
  const members = ref<Member[]>([])

  // actions
  async function fill() {
    const r = await import('@/team.json')
    const team = r.default
    name.value = team.name
    spots.value = team.spots
    members.value = team.members
  }

  function grow(val: number) {
    spots.value = val
  }

  // getters
  const spotsRemaining = computed(() => spots.value - members.value.length)

  return { name, spots, members, fill, grow, spotsRemaining }
})
