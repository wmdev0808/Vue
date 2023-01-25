import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "@/views/TeamsList.vue";
import UsersList from "@/views/UsersList.vue";
import HomeView from "@/views/HomeView.vue";
import TeamMembers from "@/views/TeamMembers.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/teams",
      component: TeamsList, // our-domain.com/teams => TeamsList
    },
    {
      path: "/teams/:teamId",
      component: TeamMembers,
    },
    {
      path: "/users",
      component: UsersList,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
  linkActiveClass: "active",
});

export default router;
