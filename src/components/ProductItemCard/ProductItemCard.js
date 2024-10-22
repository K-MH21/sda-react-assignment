import React from "react";
import { Link } from "react-router-dom";
import "./ProductItemCard.css";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h2 className="product-title">{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-price">${product.price}</p>
      <p className="product-rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>

      <Link to={`/products/${product.id}`} className="product-detail-link">
        Buy Now! {/* Style Me Later  */}
      </Link>
    </div>
  );
};

export default ProductItem;
