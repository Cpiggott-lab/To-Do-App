import React from "react";
import "./todo-card.style.css";
import { Link } from "react-router-dom";

function TodoCard({ task, onDelete }) {
  console.log(task);
  return (
    <div className="todo-card">
      <li className="task-item">
        <Link to={`/item/${task.id}`} className="task-link">
          {task.completed ? "✔️" : "❌"} {task.task}
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
