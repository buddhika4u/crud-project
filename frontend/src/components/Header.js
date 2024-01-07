import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  //   const handleNavigation = (path) => { // Home button implemented using handleNavigation
  //     window.location.href = path;
  //   };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#test" style={{ color: "red" }}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#test">
                Home
              </a>
            </li> */}
            {/* <li className="nav-item" onClick={() => handleNavigation("/")}>
              <span className="nav-link" style={{ cursor: "pointer" }}>
                Home
              </span>
            </li> */}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add Students
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/view" className="nav-link">
                View Students
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
