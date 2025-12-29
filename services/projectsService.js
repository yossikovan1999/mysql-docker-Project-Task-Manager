import HttpError from "../errors/httpError.js";
import connection from "../database/initDb.js";
import * as queries from "../database/queries.js";

export async function createProject(name, description){

    if(!name){
        throw new HttpError("must include a name", 400);
    }

    connection.query(queries.ADD_PROJECT);
} 