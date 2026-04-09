import { useState } from "react";

function TaskForm({ onAddTask, formLoading }) {
  const [title, setTitle] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setLocalError("Task title is required");
      return;
    }

    setLocalError("");
    await onAddTask(title);
    setTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" disabled={formLoading}>
        {formLoading ? "Adding..." : "Add Task"}
      </button>

      {localError && <p className="error">{localError}</p>}
    </form>
  );
}

export default TaskForm;