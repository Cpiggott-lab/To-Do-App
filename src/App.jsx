import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";

function App() {
  const [] = useState(0);

  return (
    <>
      <div className="gen-styles">
        <div className="header">
          <h1 className="app-title">To-Do-Mich</h1>
          <div className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
          </div>
        </div>
        <div className="divider-header"></div>
        <div className="main-content">Main Content</div>
        <footer className="footer">
          <div className="divider-footer"></div>

          <a href="https://github.com/Cpiggott-lab/To-Do-App">
            Github Repository
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
