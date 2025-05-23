import { useParams, Link } from "react-router-dom";
import "./ItemDetails.styles.css";

export function ItemDetails({ tasks }) {
  const { id } = useParams(); //Just grapping the id from url
  const task = tasks.find((task) => task.id === +id);

  if (!task) {
    return (
      <div className="item-details-container">
        <div className="item-details">
          <h1>Task Not Found</h1>
          <p>The task you are looking for does not exist.</p>
          <Link to="/">Go back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="item-details-container">
      <div className="item-details">
        <h1>Task Details</h1>
        <p>Task Name:{task.taskName || "No Name"}</p>
        <p>Description: {task.task}</p>
        <p>Status: {task.completed ? "Completed ✔️" : "Not completed ❌"}</p>
        <Link to={`/edit/${task.id}`}>
          <button>Edit Item</button>
        </Link>
      </div>
    </div>
  );
}
