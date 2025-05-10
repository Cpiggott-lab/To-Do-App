import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./editItemDetails.styles.css";

const EditItemDetails = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    taskName: "",
    task: "",
    completed: false,
  });

  useEffect(() => {
    const foundTask = tasks.find((task) => task.id === +id);
    if (foundTask) {
      setFormData({
        taskName: foundTask.taskName || "",
        task: foundTask.task || "",
        completed: foundTask.completed || false,
      });
    }
  }, [id, tasks]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === +id ? { ...task, ...formData } : task
      )
    );
    navigate(`/item/${id}`);
  };

  return (
    <div className="edit-task-container">
      <div className="edit-task-card">
        <h1>Edit Task</h1>
        <form className="edit-task-form" onSubmit={handleSubmit}>
          <label>
            Task Name:
            <input
              type="text"
              name="taskName"
              value={formData.taskName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="task"
              value={formData.task}
              onChange={handleChange}
              required
            />
          </label>
          <label className="edit-checkbox">
            Completed:
            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
            />
          </label>
          <button className="edit-save-button" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditItemDetails;
