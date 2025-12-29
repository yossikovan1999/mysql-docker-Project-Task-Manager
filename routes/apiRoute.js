import express from "express";
import * as projectsService from "../services/projectsService.js";


const router = express.Router();

router.post("/projects", async (req, res, next)=>{

    try{
        const {name, description} = req.body;
        await projectsService.createProject(name, description)
    }catch(error){

    }
})

export default router;