import React from "react";
import Styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <NavLink to="/" className={Styles.brand}>
        Your<strong>Stock</strong>
      </NavLink>

      <ul className={Styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
