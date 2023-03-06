import { useRootStore } from "@/stores/root";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("[Middleware] Check Auth");
  if (process.client) {
    const rootStore = useRootStore();

    rootStore.initAuth();
  }
});
