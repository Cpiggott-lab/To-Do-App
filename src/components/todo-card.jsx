import React from "react";
import { Link } from "react-router-dom";
import "./todo-card.style.css";

function TodoCard({ task, onDelete }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <Link to={`/item/${task.id}`} className="task-link">
          <span className="task-name">{task.taskName}</span>
        </Link>
        <p className="task-description">{task.task}</p>{" "}
        <p className="task-status">
          Status: {task.completed ? "Completed ✔️" : "Not Completed ❌"}
        </p>
      </div>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default TodoCard;
