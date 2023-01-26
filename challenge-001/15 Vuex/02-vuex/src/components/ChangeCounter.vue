<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  methods: {
    // addOne() {
    //   // this.$store.commit("increment");
    //   this.$store.dispatch("increment");
    // },
    ...mapActions({
      inc: "increment",
      increase: "increase",
    }),
  },
});
</script>
