export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  return { key: config.KEY };
});
