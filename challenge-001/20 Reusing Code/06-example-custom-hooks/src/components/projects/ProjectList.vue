<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup lang="ts">
import { ref, computed, watch, toRefs } from "vue";

import type User from "@/types/User";
import type Project from "@/types/Project";
import ProjectItem from "./ProjectItem.vue";
import useSearch from "@/hooks/search";

const props = defineProps<{ user: User | null }>();

// const propsWithRefs = toRefs(props);
// const user = propsWithRefs.user;

const { user } = toRefs(props);

const projects = computed<Project[]>(function () {
  return user.value ? user.value.projects : [];
});

const {
  enteredSearchTerm,
  availableItems: availableProjects,
  updateSearch,
} = useSearch<Project>(projects, "title");

const hasProjects = computed<boolean>(function () {
  if (!user.value) return false;
  return user.value.projects && availableProjects.value.length > 0;
});

watch(user, function () {
  updateSearch("");
});

// data() {
//   return {
//     enteredSearchTerm: '',
//     activeSearchTerm: '',
//   };
// },
// computed: {
//   hasProjects() {
//     return this.user.projects && this.availableProjects.length > 0;
//   },
//   availableProjects() {
//     if (this.activeSearchTerm) {
//       return this.user.projects.filter((prj) =>
//         prj.title.includes(this.activeSearchTerm)
//       );
//     }
//     return this.user.projects;
//   },
// },
// methods: {
//   updateSearch(val) {
//     this.enteredSearchTerm = val;
//   },
// },
// watch: {
//   enteredSearchTerm(val) {
//     setTimeout(() => {
//       if (val === this.enteredSearchTerm) {
//         this.activeSearchTerm = val;
//       }
//     }, 300);
//   },
//   user() {
//     this.enteredSearchTerm = '';
//   },
// },
// };
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
