import React from "react";
import "./todo-card.style.css";

function TodoCard({ task, onDelete }) {
  return (
    <li className="task-item">
      {task.completed ? "✔️" : "❌"} {task.task}
      <button
        onClick={() => onDelete(task.task)}
        style={{ marginLeft: "10px" }}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoCard;
