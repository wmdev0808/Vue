<template>
  <ul>
    <li :class="{ active: modelValue === Rating.POOR }">
      <button type="button" @click="activate(Rating.POOR)">Poor</button>
    </li>
    <li :class="{ active: modelValue === Rating.AVERAGE }">
      <button type="button" @click="activate(Rating.AVERAGE)">Average</button>
    </li>
    <li :class="{ active: modelValue === Rating.GREAT }">
      <button type="button" @click="activate(Rating.GREAT)">Great</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String as PropType<Rating | null>,
      default: null,
    },
  },
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  // computed: {
  //   activeOption(): Rating | null {
  //     return this.modelValue;
  //   },
  // },
  methods: {
    activate(option: Rating) {
      this.$emit("update:modelValue", option);
    },
  },
});
</script>

<script setup lang="ts">
import Rating from "../types/Rating";
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
