// Matching HTTP Method
// export default defineEventHandler(() => "Test post handler");
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  await useStorage().setItem("redis:test", body);
  return "Data is set";
});
