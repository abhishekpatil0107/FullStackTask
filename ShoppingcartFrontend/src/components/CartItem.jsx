import React from "react";

export default function CartItem({ item, updateQuantity }) {
  return (
    <div className="card w-full max-w-xs">
      <div className="card-img-container">
        <img src={item.image} alt={item.name} />
      </div>
      <h2 className="text-lg font-semibold text-gray-100 mb-1">{item.name}</h2>
      <p className="text-yellow-400 font-bold mb-2">₹{item.price}</p>
      <div className="flex justify-center items-center gap-2 mb-2">
        <button className="btn btn-gray" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span className="text-gray-100 w-8 text-center">{item.quantity}</span>
        <button className="btn btn-gray" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <p className="text-gray-100 font-semibold">Total: ₹{item.price * item.quantity}</p>
    </div>
  );
}
