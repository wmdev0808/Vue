<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>

    <button @click="counter.increment()" :disabled="!counter.remaining">
      Increment ({{ counter.remaining }} Remaining)
    </button>
  </div>
</template>
