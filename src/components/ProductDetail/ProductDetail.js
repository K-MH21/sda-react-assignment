import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );

        const textResponse = await response.text();
        if (!textResponse)
          throw new Error("Received empty response, likely out of bound ID");

        const data = JSON.parse(textResponse);
        setProduct(data);
        setLoading(false);

        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        if (wishlist.includes(Number(productId))) setIsInWishlist(true);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  const toggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const productExists = wishlist.includes(Number(productId));

    if (isInWishlist) {
      if (productExists) {
        wishlist = wishlist.filter((id) => id !== Number(productId));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      }
      setIsInWishlist(false);
    } else {
      if (!productExists) {
        wishlist.push(Number(productId));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      }
      setIsInWishlist(true);
    }
  };

  if (loading) return <p>Loading product details...</p>;

  if (error) return <p>Error: {error}</p>;

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
            <button className="btn wishlist-btn" onClick={toggleWishlist}>
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
