import express from "express";
import * as tasksService from "../services/tasksService.js";

const router = express.Router();

/**
 * 
 */
router.post("/", async (req, res, next) => {
  try {
    const {title, projectId} = req.body;
    await tasksService.addTask(title, projectId)
    return res.status(200).json({message : "tasks added successfully!"});
  } catch (error) {
    console.log(error)
    next(error);
  }
});

/**
 * 
 */
router.get("/", async (req, res, next) => {
  try {
    const {completed} = req.query;
    const data = await tasksService.filterTasks(completed);
    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
