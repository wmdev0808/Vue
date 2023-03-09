// Sending Redirect
export default defineEventHandler((event) => {
  return sendRedirect(event, "/api/foo", 302);
});
