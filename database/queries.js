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
is_complete TINYINT,
project_id INT NOT NULL,
FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
)`;

//===============================
//           queries
//===============================

export const ADD_PROJECT = `
INSERT INTO projects (name, description)
VALUES (?, ?)
`