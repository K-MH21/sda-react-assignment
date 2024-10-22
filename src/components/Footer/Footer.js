import React from "react";
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
          <a href="/" className="footer-link">
            Home
          </a>
        </li>
        <li className="footer-item">
          <a href="/products" className="footer-link">
            Products
          </a>
        </li>
        <li className="footer-item">
          <a href="/wishlist" className="footer-link">
            Wishlist
          </a>
        </li>
      </ul>
    </footer>
  );
}
