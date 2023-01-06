import express from "express";
import { logger } from "@disco/logging";

const app = express();

app.get("/users", (_, res) => {
  logger.info("requesting /users");
  res.json([]);
});

export default app;
