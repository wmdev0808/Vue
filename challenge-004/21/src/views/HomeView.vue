<script setup lang="ts">
import { ref } from 'vue'

import TheWelcome from '../components/TheWelcome.vue'
import TabbableTextarea from '@/components/TabbableTextarea.vue'

const comment = ref('initial textarea value')
</script>

<template>
  <main>
    <TheWelcome />
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />
    </form>
  </main>
</template>
