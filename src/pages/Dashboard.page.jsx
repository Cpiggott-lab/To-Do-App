import { NewForm } from "../components/new-form";
import TodosList from "../components/todos-list";
import "./Dashboard.styles.css";

export function Dashboard({ tasks, setTasks }) {
  return (
    <div className="dashboard-container">
      <div className="left-column">
        <div className="new-task-form">
          <NewForm setTasks={setTasks} />
        </div>
      </div>
      <div className="right-column">
        <TodosList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
