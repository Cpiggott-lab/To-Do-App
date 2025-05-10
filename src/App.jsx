import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer.jsx";
import Headers from "./components/header.jsx";
import { Dashboard, About, ItemDetails, NotFound } from "./pages";
import EditItemDetails from "./pages/editItemDetails.page.jsx";
import tasksData from "./assets/tasks.json";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : tasksData;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="gen-styles">
      <Headers />
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
      <Footer />
    </div>
  );
}

export default App;
