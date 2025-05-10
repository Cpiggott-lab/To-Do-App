import React from "react";
import { Link } from "react-router-dom";
import "./todo-card.style.css";

function TodoCard({ task, onDelete }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <span className="task-name">{task.taskName}</span>
        <Link to={`/item/${task.id}`} className="task-link">
          {task.task} {task.completed ? "✔️" : "❌"}
        </Link>
      </div>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default TodoCard;
