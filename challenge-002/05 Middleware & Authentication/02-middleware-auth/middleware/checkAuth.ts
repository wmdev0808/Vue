import { useRootStore } from "@/stores/root";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("[Middleware] Check Auth");
  const rootStore = useRootStore();

  rootStore.initAuth();
});
