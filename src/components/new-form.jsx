import React, { useState } from "react";
import "./new-form.style.css";

export function NewForm({ setTasks }) {
  const [task, setTask] = useState("");
  const [taskName, setTaskName] = useState("");
  const [completed, setCompleted] = useState(false);

  //Validates, prevents duplicates, creates a new task.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !taskName) {
      alert("Please fill in all fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      task,
      taskName,
      completed,
    };

    setTasks((prev) => {
      const foundTask = prev.find((t) => t.task === task);
      if (foundTask) {
        alert("Task already exists");
        return prev;
      }
      return [newTask, ...prev];
    });

    setTask("");
    setTaskName("");
    setCompleted(false);
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
        <label className="checkbox-label">
          Done?
          <input
            className="checkbox-input"
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={(e) => handleInput(e, setCompleted, true)}
          />
        </label>
        <button className="add-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
