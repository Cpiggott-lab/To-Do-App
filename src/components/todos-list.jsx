import React, { useState } from "react";
import TodoCard from "./todo-card";
import "./todos-list.style.css";
import tasksData from "../assets/tasks.json";

export default function TodosList() {
  const [tasks, setTasks] = useState(tasksData);
  const handleDelete = (taskToDelete) => {
    setTasks((prev) => prev.filter((task) => task.task !== taskToDelete));
  };
  return (
    <ul className="main-content">
      {tasks.map((task, i) => (
        <TodoCard key={task.task + i} task={task} onDelete={handleDelete} />
      ))}
    </ul>
  );
}
