import React from "react";
import ProductList from "../ProductList/ProductList.js";

export default function Home({ productList }) {
  return (
    <div>
      <main>
        <h1>Welcome to Our Store!</h1>
        <p>Find the best products here.</p>
        <ProductList products={productList} />
      </main>
    </div>
  );
}
