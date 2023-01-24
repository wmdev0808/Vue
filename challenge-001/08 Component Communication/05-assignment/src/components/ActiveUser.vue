<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ userage }} Years</h3>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
});
</script>
