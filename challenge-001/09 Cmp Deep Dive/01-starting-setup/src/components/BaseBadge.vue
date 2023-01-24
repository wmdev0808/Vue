<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export enum RoleTypes {
  admin = "admin",
  author = "author",
}

export default defineComponent({
  props: {
    type: {
      type: String as PropType<RoleTypes>,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        "badge--admin": this.type === "admin",
        "badge--author": this.type === "author",
      };
    },
  },
});
</script>

<style>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #ccc;
  color: #2e2e2e;
}

.badge--admin {
  background-color: #810036;
  color: white;
}

.badge--author {
  background-color: #002c8a;
  color: white;
}
</style>
