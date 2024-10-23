import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
