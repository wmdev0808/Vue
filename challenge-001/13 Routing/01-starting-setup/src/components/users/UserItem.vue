<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="role" :class="roleClass">{{ role }}</div>
  </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import Role from "@/types/Role";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String as PropType<Role>,
      required: true,
    },
  },
  computed: {
    roleClass() {
      if (this.role === Role.ENGINEER) {
        return "role--engineer";
      }
      if (this.role === Role.CONSULTANT) {
        return "role--consultant";
      }
      return null;
    },
  },
});
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.role {
  border-radius: 40px;
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}

.role--engineer {
  background-color: blue;
  color: white;
}

.role--consultant {
  background-color: #af003a;
  color: white;
}
</style>
