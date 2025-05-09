import React from "react";
import "./todo-card.style.css";
import { Link } from "react-router-dom";

function TodoCard({ task, onDelete, taskName }) {
  console.log(task);
  return (
    <div className="todo-card">
      <li className="task-item">
        <span className="task-name">{taskName}</span>
        <Link to={`/item/${task.id}`} className="task-link">
          {task.task} {task.completed ? "✔️" : "❌"}
        </Link>
        <button
          onClick={() => onDelete(task.task)}
          style={{ marginLeft: "10px" }}
          className="delete-button"
        >
          Delete
        </button>
      </li>
    </div>
  );
}
export default TodoCard;
