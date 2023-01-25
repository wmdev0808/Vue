<template>
  <li>
    <p>
      <span class="highlight">{{ name }}</span> rated the learning experience
      <span :class="ratingClass">{{ rating }}</span
      >.
    </p>
  </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type Rating from "@/types/Rating";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: String as PropType<Rating>,
      required: true,
    },
  },
  computed: {
    ratingClass(): string {
      return "highlight rating--" + this.rating;
    },
  },
});
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.rating--poor {
  color: #b80056;
}

.rating--average {
  color: #330075;
}

.rating--great {
  color: #008327;
}
</style>
