//import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand">AMCODS</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.amrita.edu/center/create/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.amrita.edu/center/create/gallery/">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
