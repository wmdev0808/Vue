<template>
  <section>
    <base-card>
      <header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </header>
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  // props: ["fullName", "infoText", "role"],
  props: {
    fullName: {
      type: String,
      required: true,
    },
    infoText: {
      type: String,
      required: true,
    },
    role: {
      type: String as PropType<RoleTypes>,
      required: true,
    },
  },
});
</script>

<script setup lang="ts">
import BaseBadge, { RoleTypes } from "./BaseBadge.vue";
import BaseCard from "./BaseCard.vue";
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
</style>
