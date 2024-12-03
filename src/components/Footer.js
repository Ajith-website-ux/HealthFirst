import React from "react";

export const Footer = () => {
  return (
    <>
    <footer className="container py-5">
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-4">
        <h2>Health First</h2>
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
        <h3 className="mb-4">Recent Articles</h3>
        <ul className="nav flex-column">
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">How I Afford Healthy Food</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">Are Eggs Good For You?</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">Healthy Fitness Meals</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">Unhealthy Habits</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0">Is Stevia Safe Or Addictive</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
        <h3 className="mb-4">Recent Books</h3>
        <ul className="nav flex-column">
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">"Healthy Cooking Tips"</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">"The Right Nutrition"</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">"Fear Of Food"</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0">"What Should I Eat"</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
        <h3 className="mb-4">About Our Mission</h3>
        <ul className="nav flex-column">
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">We are Dedicated To</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">Providing Crucial Nutrition</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0 mb-2">Facts And Individual Health</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark p-0">Advisory</a></li>
        </ul>
      </div>
    </div>

    <hr className="my-4" />
    
    <div className="row align-items-center">
      <div className="col-md-6 text-center text-md-start">
        <p className="mb-0">© 2024 Brassyacademy, All rights Reserved</p>
      </div>
      <div className="col-md-6">
        <ul className="nav justify-content-center justify-content-md-end">
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">Follow us</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark"><i className="bi bi-instagram"></i></a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark"><i className="bi bi-pinterest"></i></a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark"><i className="bi bi-twitter"></i></a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              <i className="bi bi-arrow-up-square-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
    </>
  );
}