import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer.jsx";
import Headers from "./components/header.jsx";
import { Dashboard, About, ItemDetails, NotFound } from "./pages";
import EditItemDetails from "./pages/editItemDetails.page.jsx";
import tasksData from "./assets/tasks.json";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : tasksData;
  });
  //When the app first loads, it checks if there are any tasks saved in localStorage.
  //If yes, it loads them.
  //If no, it loads a default task list from tasksData.json.
  //This ensures that users keep their data even after refreshing the page."

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //This effect runs whenever the tasks state changes.
  //It saves the current tasks to localStorage, ensuring that the data persists across page refreshes.
  return (
    <div className="app-container">
      <Headers />
      <div className="main-content">
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={<Dashboard tasks={tasks} setTasks={setTasks} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/item/:id" element={<ItemDetails tasks={tasks} />} />
            <Route
              path="/edit/:id"
              element={<EditItemDetails tasks={tasks} setTasks={setTasks} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
