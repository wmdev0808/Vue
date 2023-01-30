import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "@/views/coaches/CoachesList.vue";
import CoachDetail from "@/views/coaches/CoachDetail.vue";
import CoachRegistration from "@/views/coaches/CoachRegistration.vue";

import ContactCoach from "@/views/requests/ContactCoach.vue";
import RequestsReceived from "@/views/requests/RequestsReceived.vue";

import NotFound from "@/views/NotFound.vue";
import UserAuth from "@/views/auth/UserAuth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: RequestsReceived },
    { path: "/auth", component: UserAuth },
    { path: "/:notFound(.*)*", component: NotFound },
  ],
});

export default router;
