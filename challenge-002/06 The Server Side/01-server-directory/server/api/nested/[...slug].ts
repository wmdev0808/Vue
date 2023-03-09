// Using a Nested Router
import { createRouter, defineEventHandler, useBase } from "h3";

const router = createRouter();

router.get(
  "/test",
  defineEventHandler(() => "Hello World")
);

export default useBase("/api/nested", router.handler);
