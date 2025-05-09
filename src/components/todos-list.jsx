import React, { useState } from "react";
import TodoCard from "./todo-card";
import "./todos-list.style.css";

export default function TodosList({ tasks, setTasks }) {
  const handleDelete = (taskToDelete) => {
    setTasks((prev) => prev.filter((task) => task.task !== taskToDelete));
  };
  console.log(tasks);
  return (
    <ul className="main-content">
      {tasks.map((task) => (
        <TodoCard
          key={task.id}
          task={task}
          taskName={task.taskName}
          completed={task.completed}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
