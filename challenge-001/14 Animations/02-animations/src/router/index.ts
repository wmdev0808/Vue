import { createRouter, createWebHistory } from "vue-router";

import AllUsers from "@/views/AllUsers.vue";
import CourseGoals from "@/views/CourseGoals.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: AllUsers },
    { path: "/goals", component: CourseGoals },
  ],
});

export default router;
