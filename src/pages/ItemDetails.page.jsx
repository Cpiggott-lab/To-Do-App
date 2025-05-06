import { useParams } from "react-router-dom";
import tasks from "../assets/tasks.json";
import "./ItemDetails.styles.css";

export function ItemDetails() {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id));

  return (
    <>
      <div className="item-details-container">
        <div className="item-details">
          <h1>Task Details</h1>
          <p>Task:{task.task}</p>
          <p>Status: {task.completed ? "Completed ✔️" : "Not completed ❌"}</p>
        </div>
      </div>
    </>
  );
}
