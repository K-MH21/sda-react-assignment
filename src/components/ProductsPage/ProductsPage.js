import React, { useState, useEffect } from "react";
import ProductItemCard from "../ProductItemCard/ProductItemCard";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Bad name but I am bad at naming
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="products-page">
      <h1>All Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(t) => setSearchTerm(t.target.value)}
        className="search-bar"
      />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
