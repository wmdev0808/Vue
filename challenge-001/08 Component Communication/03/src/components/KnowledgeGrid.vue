<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
  </ul>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export interface Topic {
  id: string;
  title: string;
  description: string;
  fullText: string;
}

export default defineComponent({
  // props: ["topics"],
  props: {
    topics: {
      type: Object as PropType<Topic[]>,
    },
  },
  emits: ["select-topic"],
});
</script>

<script setup lang="ts">
import KnowledgeElement from "./KnowledgeElement.vue";
</script>
