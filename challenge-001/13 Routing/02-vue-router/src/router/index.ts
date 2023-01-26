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
      meta: { needsAuth: true },
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
      beforeEnter(to, from, next) {
        console.log("users beforeEnter");
        console.log(to, from);
        next();
      },
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
  scrollBehavior(_to, _from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log("Global beforeEach");
  console.log(to, from);
  if (to.meta.needsAuth as boolean) {
    console.log("Needs auth!");
    next();
  } else {
    next();
  }
  // if (to.name === "team-members") {
  //   next();
  // } else {
  //   next({ name: "team-members", params: { teamId: "t2" } });
  // }
  next();
});

router.afterEach(function (to, from) {
  // Sending analytics data
  console.log("Global afterEach");
  console.log(to, from);
});

export default router;
