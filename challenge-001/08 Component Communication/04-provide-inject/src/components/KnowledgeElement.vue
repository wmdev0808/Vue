<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  // props: ["id", "topicName", "description"],
  emits: ["select-topic"],
  props: {
    id: {
      type: String,
      required: true,
    },
    topicName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<script setup lang="ts">
const selectTopic = inject("selectTopic") as (topicId: string) => void;
</script>
