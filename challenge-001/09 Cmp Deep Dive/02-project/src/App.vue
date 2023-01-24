<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
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

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Mange Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <div class="dynamic-cmp">
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RoleTypes } from "./components/UI/BaseBadge.vue";

export default defineComponent({
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Paul Li",
        description: "Site owner and admin",
        role: RoleTypes.admin,
      },
    };
  },
  methods: {
    setSelectedComponent(cmp: string) {
      this.selectedComponent = cmp;
    },
  },
  components: {
    ActiveGoals,
    ManageGoals,
  },
});
</script>

<script setup lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
