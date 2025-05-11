import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const base = import.meta.env.MODE === "production" ? "/To-Do-App" : "/";

createRoot(document.getElementById("root")).render(
  <Router basename={base}>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
