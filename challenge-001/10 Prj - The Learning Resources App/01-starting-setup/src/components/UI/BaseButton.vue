<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export enum ButtonMode {
  DEFAULT = "",
  FLAT = "flat",
}

export default defineComponent({
  // props: ["mode"],
  props: {
    mode: {
      type: String as PropType<ButtonMode>,
      required: false,
    },
  },
});
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
