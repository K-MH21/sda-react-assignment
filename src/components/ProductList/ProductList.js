import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItemCard/ProductItemCard";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      let fetchedProducts = [];

      while (fetchedProducts.length !== 5) {
        const randomId = Math.floor(Math.random() * 20) + 1;
        const response = await fetch(
          `https://fakestoreapi.com/products/${randomId}`
        );
        const data = await response.json();
        if (!fetchedProducts.some((product) => product.id === data.id)) {
          // We should also include a condition for rating, we don't want to scare our customers with bad ratings :D
          fetchedProducts.push(data);
        }
      }

      setProducts(fetchedProducts);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
