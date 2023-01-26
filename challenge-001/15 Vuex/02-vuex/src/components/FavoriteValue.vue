<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    counter(): number {
      // return this.$store.getters.normalizedCounter;
      return this.$store.getters["numbers/normalizedCounter"];
    },
  },
});
</script>
