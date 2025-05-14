import React from "react";
import TodoCard from "./todo-card";

export default function TodosList({ tasks, setTasks }) {
  const handleDelete = (idToDelete) => {
    setTasks((prev) => prev.filter((task) => task.id !== idToDelete));
  };
  //just filtering out the task that we want to delete being idToDelete

  return (
    <ul className="main-content">
      {tasks.map((task) => (
        <TodoCard key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </ul>
  );
}
