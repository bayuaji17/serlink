import { Hono } from "hono";
import { logger } from "hono/logger";
import { usersRouter } from "./routes/users";
import { auth } from "@/lib/auth";

export const app = new Hono();
// Logging
app.use("*", logger());
//Base path
app.basePath("/api");
// Better-auth
app.on(["POST", "GET"], "/api/auth/*", async (c) => {
  const res = await auth.handler(c.req.raw);
  return new Response(res.body, res);
  // return auth.handler(c.req.raw);
});
// Router
app.route("/users", usersRouter);
