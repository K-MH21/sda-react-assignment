import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    }

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  return (
    product && (
      <div className="product-detail">
        <h2 className="product-detail-title">{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
        <p className="product-detail-description">{product.description}</p>
        <div className="product-detail-numbers-actions-container">
          <div className="product-detail-numbers">
            <p className="product-detail-price">Price: ${product.price}</p>
            <p className="product-detail-category">
              Category: {product.category}
            </p>
            <p className="product-detail-rating">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>

          <div className="product-actions">
            <button className="btn order-btn">Order</button>
            <button className="btn wishlist-btn">Add to Wishlist</button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
