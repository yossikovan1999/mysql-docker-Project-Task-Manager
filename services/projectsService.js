import HttpError from "../errors/httpError.js";
import connection from "../database/initDb.js";
import * as queries from "../database/queries.js";

/**
 *
 * @param {*} name
 * @param {*} description
 * @returns
 */
export async function createProject(name, description) {
  if (!name) {
    throw new HttpError("must include a name", 400);
  }

  const [results, fields] = await connection.query(queries.ADD_PROJECT, [
    name,
    description,
  ]);

  return results;
}

/**
 * if search return all the products from the query else return all
 * @returns
 */
export async function searchProjects(search) {
  if (search) {
    await connection.query(query.PROJECT_NAME_CONTAINS, [`%${search}%`])
  }else{
    const data = await getAllProjects();
    return data;
  }
}

/**
 * return all the projects in the database
 * @returns 
 */
export async function getAllProjects() {
  const [rows, fields] = await connection.query(queries.GET_ALL_PROJECTS);

  return rows;
}
