import "./App.css";
import List from "./components/todos-list.jsx";
import Footer from "./components/footer.jsx";
import Headers from "./components/header.jsx";

function App() {
  return (
    <div className="gen-styles">
      <Headers />
      <main className="main">
        <List />
      </main>
      <Footer />
    </div>
  );
}

export default App;
