import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-company">E-Commerce</div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/wishlist" className="nav-link">
            Wishlist
          </Link>
        </li>
      </ul>
    </nav>
  );
}
