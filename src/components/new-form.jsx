import React, { useState } from "react";
import "./new-form.style.css";
import TodoCard from "./todo-card.jsx";
import TodoList from "./todos-list.jsx";

export function NewForm({ setTasks }) {
  const [task, setTask] = useState("");
  const [taskName, setTaskName] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      task,
      taskName,
      completed,
    };

    if (!task || !taskName) {
      alert("Please fill in all fields");
      return;
    }
    setTasks((prev) => {
      const foundTask = prev.find((t) => t.task === task);
      if (foundTask) {
        alert("Task already exists");
        return prev;
      }
      return [newTask, ...prev];
    });
  };

  const handleInput = (e, setState, isChecked = false) => {
    setState(isChecked ? e.target.checked : e.target.value);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        className="new-task-input"
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        className="task-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <div className="checkbox-container">
        <label>
          Completed?
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={(e) => handleInput(e, setCompleted, true)}
          />
        </label>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
