import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const updateQuantity = (id, qty) => {
    if (qty <= 0) setCart(prev => prev.filter(i => i.id !== id));
    else setCart(prev => prev.map(i => (i.id === id ? { ...i, quantity: qty } : i)));
  };

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-300 text-center">Your cart is empty.</p>
      ) : (
        <>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {cart.map(item => (
              <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
            ))}
          </div>

          
          <p className="text-xl font-bold text-yellow-400 text-center mt-6">Total: ₹{total}</p>

         
          <div className="flex justify-center mt-4">
            <Link to="/checkout" className="btn btn-yellow">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
