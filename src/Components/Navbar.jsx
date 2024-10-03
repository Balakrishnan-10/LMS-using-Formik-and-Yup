import React from "react";
import { Link } from "react-router-dom";
import { SiFormik } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { FaBook } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-primary mb-5 p-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="link" to="/#">
            <SiFormik className="icon " />
            Library Management System Using FORMIK
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <RxDashboard className="mb-2" />
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/create">
                  <FaBook className="mb-2" />
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
