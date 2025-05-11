import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/App-Logo.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="title-logo-content">
          <img src={logo} alt="Todomich Logo" className="app-logo" />
          <h1 className="app-title">To-Do-Mich</h1>
        </div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="divider-header"></div>
    </>
  );
}
