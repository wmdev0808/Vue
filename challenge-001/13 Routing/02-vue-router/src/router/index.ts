import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "@/views/teams/TeamsList.vue";
import TeamMembers from "@/views/teams/TeamMembers.vue";
import TeamsFooter from "@/views/teams/TeamsFooter.vue";
import UsersList from "@/views/users/UsersList.vue";
import UsersFooter from "@/views/users/UsersFooter.vue";
import NotFound from "@/views/NotFound.vue";
// import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    { path: "/", redirect: "/teams" },
    {
      path: "/teams",
      name: "teams",
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        }, // /teams/t1
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: "/users",
      components: { default: UsersList, footer: UsersFooter },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    { path: "/:notFound(.*)*", component: NotFound },
  ],
  linkActiveClass: "active",
});

export default router;
