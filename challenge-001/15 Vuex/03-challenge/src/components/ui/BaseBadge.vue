<template>
  <span class="badge" :class="['badge--' + mode, { nml: noMarginLeft }]">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import type BadgeMode from "@/types/BadgeMode";

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<BadgeMode>,
      required: true,
    },
    noMarginLeft: {
      type: Boolean,
    },
  },
});
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.15rem 1.25rem;
  background-color: #ccc;
  color: #292929;
  margin: 0 0.75rem;
  border-radius: 30px;
}

.nml {
  margin-left: 0;
}

.badge--highlight {
  background-color: #f0b800;
  color: black;
}

.badge--elegant {
  background-color: #45006d;
  color: white;
}
</style>
