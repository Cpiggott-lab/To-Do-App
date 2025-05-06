import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer.jsx";
import Headers from "./components/header.jsx";
import { Dashboard, About, ItemDetails, NotFound } from "./pages";

const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/about", element: <About /> },
  { path: "/item/:id", element: <ItemDetails /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <div className="gen-styles">
      <Headers />
      <main className="main">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
