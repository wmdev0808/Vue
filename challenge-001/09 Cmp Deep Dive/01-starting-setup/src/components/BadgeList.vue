<template>
  <section>
    <base-card>
      <template v-slot:header>
        <h2>Available Badges</h2>
      </template>
      <template v-slot:default>
        <ul>
          <li>
            <base-badge :type="RoleTypes.admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge :type="RoleTypes.author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>

<script setup lang="ts">
import BaseBadge, { RoleTypes } from "./BaseBadge.vue";
import BaseCard from "./BaseCard.vue";
</script>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
