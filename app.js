import express from "express"
import {PORT} from "./consts.js";
import apiRouter from "./"
import "./database/initDb.js";

const app = express()

app.use("/api", apiRouter);

app.listen(PORT, (err)=>{
     console.log(`server running successfully at - http://www.localhost:${PORT}`);
})