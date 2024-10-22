import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-company">E-Commerce</div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/products" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="/wishlist" className="nav-link">
            Wishlist
          </a>
        </li>
      </ul>
    </nav>
  );
}
