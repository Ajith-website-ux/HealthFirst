import React from "react";

export const Navbar = () => {
  return (
    // <div className="row">
      // <div className="col-lg">
        <nav className="navbar navbar-expand-lg text-dark  fs-5">
          <div className="container">
            <a className="navbar-brand fs-1 fw-1" href="#Home">
              Health First
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Follow Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-instagram text-dark icon"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-pinterest text-dark"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-twitter text-dark"></i>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-bag-check-fill text-dark "></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-pinterest text-dark"></i>
                  </a>
                </li>
                <button
                  className="btn btn-dark border-0 nav-item"
                  style={{ borderRadius: "0" }}
                >
                  Contact Us
                </button>
              </ul>
            </div>
          </div>
        </nav>
      // </div>
    // </div>
  );
};
