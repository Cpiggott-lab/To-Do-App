import { NewForm } from "../components/new-form";
import TodosList from "../components/todos-list";
import "./Dashboard.styles.css";

export function Dashboard({ tasks, setTasks }) {
  return (
    <div className="dashboard-container">
      <div className="new-task-form">
        <NewForm setTasks={setTasks} />
      </div>
      <div className="todos-list">
        <TodosList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
