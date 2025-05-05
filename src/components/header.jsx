import React from "react";
import "./header.style.css";

export default function header() {
  return (
    <>
      <div className="header">
        <h1 className="app-title">To-Do-Mich</h1>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
        </div>
      </div>
      <div className="divider-header"></div>
    </>
  );
}
