import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "@/views/ProductsList.vue";
import ShopAdmin from "@/views/ShopAdmin.vue";
import UserCart from "@/views/UserCart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsList },
    { path: "/cart", component: UserCart },
    { path: "/admin", component: ShopAdmin },
  ],
});

export default router;
