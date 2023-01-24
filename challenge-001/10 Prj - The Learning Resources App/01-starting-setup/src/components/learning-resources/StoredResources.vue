<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script setup lang="ts">
import { inject } from "vue";

import LearningResource from "./LearningResource.vue";
import type { Resource } from "./TheResources.vue";

const resources = inject("resources") as Resource[];

// export default {
//   inject: ["resources"],
//   components: {
//     LearningResource,
//   },
// };
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
