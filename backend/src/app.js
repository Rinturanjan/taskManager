import express from "express";
import cors from "cors";
import { readTasks, writeTasks } from "./utils/fileHelpers.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await readTasks();
    return res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: tasks
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch tasks"
    });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || typeof title !== "string" || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title is required and must be a non-empty string"
      });
    }

    const tasks = await readTasks();

    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    await writeTasks(tasks);

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: newTask
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create task"
    });
  }
});

app.patch("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    if (typeof completed !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "Completed must be a boolean value"
      });
    }

    const tasks = await readTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    tasks[taskIndex].completed = completed;
    await writeTasks(tasks);

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: tasks[taskIndex]
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update task"
    });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await readTasks();

    const taskExists = tasks.some((task) => task.id === id);

    if (!taskExists) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    const updatedTasks = tasks.filter((task) => task.id !== id);
    await writeTasks(updatedTasks);

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete task"
    });
  }
});

export default app;