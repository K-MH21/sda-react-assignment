import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItemCard/ProductItemCard";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let fetchedProducts = [];

        while (fetchedProducts.length !== 5) {
          const randomId = Math.floor(Math.random() * 20) + 1;
          const response = await fetch(
            `https://fakestoreapi.com/products/${randomId}`
          );
          const textResponse = await response.text();
          if (!textResponse)
            throw new Error(
              "Received an empty response, likely out of bound ID"
            );

          const data = JSON.parse(textResponse);
          if (!fetchedProducts.some((product) => product.id === data.id)) {
            // We should also include a condition for rating, we don't want to scare our customers with bad ratings :D
            fetchedProducts.push(data);
          }
        }

        setProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
