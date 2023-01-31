import { createRouter, createWebHistory } from "vue-router";

import AddProduct from "@/views/AddProduct.vue";
import AllProducts from "@/views/AllProducts.vue";
import ProductDetails from "@/views/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: AllProducts },
    { path: "/products/:pid", component: ProductDetails },
    { path: "/products/add", component: AddProduct },
  ],
});

export default router;
