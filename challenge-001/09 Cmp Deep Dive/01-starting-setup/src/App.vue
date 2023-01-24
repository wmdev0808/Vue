<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
    </course-goals>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RoleTypes } from "./components/BaseBadge.vue";

export default defineComponent({
  data() {
    return {
      activeUser: {
        name: "Paul Li",
        description: "Site owner and admin",
        role: RoleTypes.admin,
      },
    };
  },
});
</script>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
