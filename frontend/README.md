# Task Manager App

A small full-stack Task Manager application built with React and Node.js/Express.

## Features

- View all tasks
- Add a new task
- Mark task as completed
- Delete a task
- Loading and error states
- Simple file-based persistence using JSON

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Storage: JSON file

## Project Structure

task-manager-app/
- backend/
- frontend/

# Setup Instructions

# Clone the project

```bash
git clone https://github.com/Rinturanjan/taskManager.git
cd task-manager-app

# Run Instructions

- Start the backend by going to the backend folder, installing dependencies, and running the server. It will run on http://localhost:5000

- Then start the frontend from the frontend folder after installing dependencies. It will run on http://localhost:5173

- Open http://localhost:5173
 in your browser to use the app. Make sure the backend is running first.


#API Endpoints

- GET /tasks → fetch all tasks
- POST /tasks → create a new task
- PATCH /tasks/:id → update task completion status
- DELETE /tasks/:id → delete a task

- All responses are in JSON format.


#Validation & Error Handling

- Task title must not be empty.
- Completed field must be boolean.
- Handles task not found errors.
- Frontend shows loading and error messages for better user experience.


#Assumptions / Trade-offs

- Project is kept small as per assignment scope.
- Used JSON file instead of database for simplicity.
- Focused more on functionality than UI design.
- Update API handles only task status.


#Future Improvements

- Add task filtering (completed/incomplete).
- Allow editing task title.
- Use database like MongoDB.
- Add authentication and testing.
- Add Docker support.
