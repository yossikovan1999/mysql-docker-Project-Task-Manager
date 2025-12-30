import express from "express";
import * as projectsService from "../services/projectsService.js";

const router = express.Router();

/**
 * 
 */
router.post("/", async (req, res, next) => {
  try {
    const { name, description } = req.body;
    await projectsService.createProject(name, description);
    return res.status(201).json({message : "project added successfully"})
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
    const {search} = req.query;
    const data = await projectsService.getAllProjects();
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
