import { useRootStore } from "@/stores/root";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("[Middleware] Just Auth");
  const rootStore = useRootStore();

  if (process.client && !rootStore.isAuthenticated) {
    return navigateTo("/admin/auth");
  }
});
