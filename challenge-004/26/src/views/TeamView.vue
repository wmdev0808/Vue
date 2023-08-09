<script setup lang="ts">
import { ref } from 'vue'

// import team from '@/team.json'
import TeamHeader from '@/components/teams/TeamHeader.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
import TeamFooter from '@/components/teams/TeamFooter.vue'
import UIModal from '@/components/ui/UIModal.vue'

import { useTeamStore } from '@/stores/team'

const team = useTeamStore()

team.fill()

const showModal = ref(false)

// Example of calling a store action.
// setTimeout(() => {
//   team.grow(25)
// }, 2000)
</script>

<template>
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

  <UIModal :show="showModal" @close="showModal = false">
    <template #default>
      <p>Need to add a new member to your team?</p>

      <form class="mt-6">
        <div class="flex gap-2">
          <input type="email" placeholder="Email Address..." class="flex-1" />
          <button>Add</button>
        </div>
      </form>
    </template>
  </UIModal>
</template>
