<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food', 'tacos')
</script>

<template>
  <main>
    <TheWelcome />
    <p>What is your favorite food? <input type="text" v-model="food" /></p>
  </main>
</template>
