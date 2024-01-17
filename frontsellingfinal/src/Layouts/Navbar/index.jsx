import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          Selling<span>.</span>
        </div>
        <div className="navbar__container__items">
          <ul className="navbar__container__items__list">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/AddPage"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Add Page</li>
            </NavLink>
            <NavLink
              to={"/Basket"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Basket</li>
            </NavLink>
            <li>Products</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="navbar__container__items__menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
