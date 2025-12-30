import mysql from "mysql2/promise";
import { CREATE_PROJECTS_TABLE, CREATE_TASKS_TABLE } from "./queries.js";

const connection = await mysql.createConnection({
     host: '127.0.0.1',
     user: 'root',
     password: "my-1167",
     database: "taskManagerDb",
     port : "3306"
})


await connection.query(CREATE_PROJECTS_TABLE);
await connection.query(CREATE_TASKS_TABLE);

export default connection;
