<template>
  <section>
    <h2>{{ topicTitle }}</h2>
    <p>{{ text }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // props: ['topicTitle', 'text'],
  props: {
    topicTitle: {
      type: String,
      required: true,
      default: "",
    },
    text: {
      type: String,
      required: true,
      default: "",
    },
  },
});
</script>
