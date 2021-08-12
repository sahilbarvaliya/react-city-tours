import React from "react";
import "./navbar.scss";
import logo from "../../logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="City Tours Company"></img>
      <ul className="nav-links">
        <li>
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Tours
          </a>
        </li>
        <li>
          <a href="#" className="nav-link active">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
