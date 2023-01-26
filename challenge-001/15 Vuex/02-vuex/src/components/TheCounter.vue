<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  computed: {
    // counter() {
    //   // return this.$store.state.counter;
    //   return this.$store.getters.finalCounter;
    // },
    // ...mapGetters(["finalCounter"]),
    ...mapGetters("numbers", ["finalCounter"]),
  },
});
</script>
