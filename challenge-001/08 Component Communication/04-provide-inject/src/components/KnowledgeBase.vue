<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid></knowledge-grid>
  </section>
</template>

<!-- <script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Topic } from "./KnowledgeGrid.vue";

export default defineComponent({
  // props: ["topics"],
  emits: ["select-topic"],
  props: {
    topics: {
      type: Object as PropType<Topic[]>,
    },
  },
});
</script> -->

<script setup lang="ts">
import KnowledgeGrid from "./KnowledgeGrid.vue";
</script>
