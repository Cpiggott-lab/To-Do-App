import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="app-title">To-Do-Mich</h1>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="divider-header"></div>
    </>
  );
}
