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

## Setup Instructions

### 1. Clone the project

```bash
git clone <your-repository-link>
cd taskManager


## RunInstructions

1. Start Backend Server
# Open Terminal (powershell)

- cd backend
- npm install
- npm run dev

##Backend will run on:
http://localhost:5000


2. Start Frontend App
#Open a new terminal:

- cd frontend
- npm install
- npm run dev

#Frontend will run on:
http://localhost:5173


3. Open the Application
#Open your browser and go to: 
http://localhost:5173


##API Endpoints

- GET /tasks → fetch all tasks
- POST /tasks → create a new task
- PATCH /tasks/:id → update task completion status
- DELETE /tasks/:id → delete a task

- All responses are in JSON format.

##Validation & Error Handling

- Task title must not be empty.
- Completed field must be boolean.
- Handles task not found errors.
- Frontend shows loading and error messages for better user experience.


##Assumptions / Trade-offs

- Project is kept small as per assignment scope.
- Used JSON file instead of database for simplicity.
- Focused more on functionality than UI design.
- Update API handles only task status.


##Future Improvements

- Add task filtering (completed/incomplete).
- Allow editing task title.
- Use database like MongoDB.
- Add authentication and testing.
- Add Docker support.
