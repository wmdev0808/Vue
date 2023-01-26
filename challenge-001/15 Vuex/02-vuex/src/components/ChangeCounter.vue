<template>
  <button @click="addOne">Add 2</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    addOne() {
      // this.$store.commit("increment");
      this.$store.dispatch("increment");
    },
  },
});
</script>
