import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItemCard/ProductItemCard";
import "./WishlistPage.css";

const WishlistPage = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState([]);
  let error = false;

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      if (wishlist.length === 0) {
        setLoading(false);
        return;
      }

      let fetchedProducts = [];

      for (let productId of wishlist) {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${productId}`
          );
          const textResponse = await response.text();

          if (!textResponse) {
            throw new Error(
              `Product ID ${productId} returned an empty response. Skipping...`
            );
          }

          const product = JSON.parse(textResponse);
          fetchedProducts.push(product);
        } catch (e) {
          error = true;
        }
      }
      setWishlistProducts(fetchedProducts);
      setLoading(false);

      if (error) {
        error = false;
        alert(`Error fetching product some products.`);
      }
    };

    fetchWishlistProducts();
  }, []);

  const removeFromWishlist = (productId) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter((id) => id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setWishlistProducts(
      wishlistProducts.filter((product) => product.id !== productId)
    );
  };

  if (loading) return <p>Loading your wishlist...</p>;

  if (wishlistProducts.length === 0) {
    return (
      <div className="empty-wishlist">
        <h2>Your Wishlist is Empty!</h2>
        <p>Start adding products to your wishlist.</p>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <div className="product-list">
        {wishlistProducts.map((product) => (
          <div key={product.id} className="product-item-container">
            <ProductItem product={product} />
            <button
              className="remove-btn"
              onClick={() => removeFromWishlist(product.id)}
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
