//===============================
//        creating tables
//===============================
export const CREATE_PROJECTS_TABLE = `
CREATE TABLE IF NOT EXISTS projects(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL UNIQUE,
description TEXT DEFAULT NULL
)`;

export const CREATE_TASKS_TABLE = `
CREATE TABLE IF NOT EXISTS tasks(
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
is_complete TINYINT DEFAULT 0,
project_id INT NOT NULL,
FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
)`;

//===============================
//           queries
//===============================

export const ADD_PROJECT = `
INSERT INTO projects (name, description)
VALUES (?, ?)
`;

export const GET_ALL_PROJECTS = `
SELECT * FROM projects
`;

export const GET_PROJECT_TASK_COUNT = `
SELECT *, COUNT(*) AS taskCount
FROM tasks
ORDER BY 
`;

export const PROJECT_NAME_CONTAINS = `
SELECT * FROM projects
WHERE name LIKE ?
`;

//==================================
//         tasks queries
//==================================
export const ADD_TASK = `
INSERT INTO tasks (title, project_id)
VALUES (?, ?)
`

export const FILTER_TASK_BY_COMPLETE = `
SELECT * FROM tasks
WHERE is_complete = ?
`
