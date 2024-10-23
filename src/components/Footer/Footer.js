import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-company">
        &copy; E-Commerce Company.
        <br />
        All rights reserved.
      </div>
      <ul className="footer-links">
        <li className="footer-item">
          <Link to="/" className="footer-link">
            Home
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/products" className="footer-link">
            Products
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/wishlist" className="footer-link">
            Wishlist
          </Link>
        </li>
      </ul>
    </footer>
  );
}
