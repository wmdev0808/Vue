<template>
  <section class="container">
    <h2>My Goals</h2>
    <ul>
      <li v-for="goal in goals" :key="goal.id">{{ goal.text }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import type Goal from "@/types/Goal";

export default defineComponent({
  props: {
    goals: {
      type: Array as PropType<Goal[]>,
    },
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
}
</style>
