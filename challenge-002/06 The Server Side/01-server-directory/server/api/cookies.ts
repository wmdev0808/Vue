// Accessing Request Cookies
export default defineEventHandler((event) => {
  const cookies = parseCookies(event);
  return { cookies };
});
