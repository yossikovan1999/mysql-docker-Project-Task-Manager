import HttpError from "../errors/httpError.js";
import connection from "../database/initDb.js";
import * as queries from "../database/queries.js";

/**
 * 
 * @param {*} title 
 * @param {*} projectId 
 */
export async function addTask(title, projectId) {

    const [result] = await connection.query(queries.ADD_TASK, [title, projectId]);
}

/**
 * 
 */
export async function filterTasks(completed){
    
    const [result] = await connection.query(queries.FILTER_TASK_BY_COMPLETE, [completed]);
    return result;
}

/**
 * 
 * @returns 
 */
export async function getAllTasks(){

    const [result] = await connection.query("SELECT * FROM tasks");
    console.log(result);
    return result;

}