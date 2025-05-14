import React, { useState } from "react";
import "./new-form.style.css";

export function NewForm({ setTasks }) {
  const [task, setTask] = useState("");
  const [taskName, setTaskName] = useState("");
  const [completed, setCompleted] = useState(false);

  //Validates, prevents duplicates, creates a new task.
  const handleSubmit = (e) => {
    e.preventDefault();

    //Checks if the task and taskName are empty
    if (!task || !taskName) {
      alert("Please fill in all fields");
      return;
    }
    //Creates a new task object with a unique id
    //The id is generated using the current timestamp
    const newTask = {
      id: Date.now(),
      task,
      taskName,
      completed,
    };
    //Checks if the task already exists in the tasks array
    //If it does, it alerts the user and prevents adding the task
    //If it doesn't, it adds the new task to the tasks array
    setTasks((prev) => {
      const foundTask = prev.find((t) => t.task === task);
      if (foundTask) {
        alert("Task already exists");
        return prev;
      }
      return [newTask, ...prev];
    });
    //Resets the form fields to their initial state
    //This is done to clear the input fields after adding a new task
    setTask("");
    setTaskName("");
    setCompleted(false);
  };
  //Handles the input changes for the task and taskName fields
  //It updates the state with the new value
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
