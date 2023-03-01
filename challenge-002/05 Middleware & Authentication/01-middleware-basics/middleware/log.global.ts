export default defineNuxtRouteMiddleware((to, from) => {
  console.log("[Middleware] The Log Middleware is running");
});
