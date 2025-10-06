import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card w-full max-w-xs">
      <div className="card-img-container">
        <img src={product.image} alt={product.name} />
      </div>
      <h2 className="text-lg font-semibold text-gray-100 mb-1">{product.name}</h2>
      <p className="text-yellow-400 font-bold mb-3">₹{product.price}</p>
      <button className="btn btn-yellow" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
