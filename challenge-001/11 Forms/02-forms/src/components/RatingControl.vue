<template>
  <ul>
    <li :class="{ active: activeOption === Rating.POOR }">
      <button type="button" @click="activate(Rating.POOR)">Poor</button>
    </li>
    <li :class="{ active: activeOption === Rating.AVERAGE }">
      <button type="button" @click="activate(Rating.AVERAGE)">Average</button>
    </li>
    <li :class="{ active: activeOption === Rating.GREAT }">
      <button type="button" @click="activate(Rating.GREAT)">Great</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeOption: null as Rating | null,
    };
  },
  methods: {
    activate(option: Rating) {
      this.activeOption = option;
    },
  },
});
</script>

<script setup lang="ts">
enum Rating {
  POOR = "poor",
  AVERAGE = "average",
  GREAT = "great",
}
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
