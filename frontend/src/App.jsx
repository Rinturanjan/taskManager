import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API_URL = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch tasks");
      }

      setTasks(result.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    try {
      setFormLoading(true);
      setError("");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to add task");
      }

      setTasks((prev) => [...prev, result.data]);
    } catch (err) {
      setError(err.message || "Failed to add task");
    } finally {
      setFormLoading(false);
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: !completed })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update task");
      }

      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: result.data.completed } : task
        )
      );
    } catch (err) {
      setError(err.message || "Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    try {
      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete task");
      }

      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete task");
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} formLoading={formLoading} />

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p className="info">Loading tasks...</p>
      ) : (
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      )}
    </div>
  );
}

export default App;