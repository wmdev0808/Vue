<template>
  <section>
    <base-card>
      <!-- <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template> -->
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
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
