import express from "express";
import { PORT } from "./consts.js";
import projectsRouter from "./routes/projectsRoute.js";
import tasksRouter from "./routes/tasksRoute.js"
import "./database/initDb.js";

const app = express();

app.use(express.json());

app.use("/api/projects", projectsRouter);

app.use("/api/tasks", tasksRouter)

app.listen(PORT, (err) => {
  console.log(`server running successfully at - http://www.localhost:${PORT}`);
});
