export default defineEventHandler((event) => {
  return {
    api: "works",
    auth: event.context.auth,
  };
});
