import { NewForm } from "../components/new-form";
import TodosList from "../components/todos-list";
import tasksData from "../assets/tasks.json";
import { useState } from "react";
import "./Dashboard.styles.css";

export function Dashboard() {
  const [tasks, setTasks] = useState(tasksData);
  console.log(tasks);
  return (
    <>
      <div className="dashboard-container">
        <div className="new-task-form">
          <NewForm setTasks={setTasks} />
        </div>
        <div className="todos-list">
          <TodosList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
}
