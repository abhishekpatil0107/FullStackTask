import { useState, useEffect } from "react";

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    setCart(saved ? JSON.parse(saved) : []);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-300 text-center">No items to checkout.</p>
      ) : (
        <div className="bg-gray-800 rounded-xl shadow-xl p-6 max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-gray-700 text-gray-200 uppercase text-sm">
                  <th className="p-4 border-b border-gray-600">Product</th>
                  <th className="p-4 border-b border-gray-600 text-center">Quantity</th>
                  <th className="p-4 border-b border-gray-600 text-center">Price</th>
                  <th className="p-4 border-b border-gray-600 text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={`${idx % 2 === 0 ? "bg-gray-700" : "bg-gray-600"} hover:bg-gray-500 transition-colors duration-300`}
                  >
                    <td className="p-4 border-b border-gray-600">{item.name}</td>
                    <td className="p-4 border-b border-gray-600 text-center">{item.quantity}</td>
                    <td className="p-4 border-b border-gray-600 text-center">₹{item.price}</td>
                    <td className="p-4 border-b border-gray-600 text-center">₹{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-6 p-4 bg-gray-700 rounded-lg shadow-inner">
            <span className="text-lg font-semibold text-gray-200">Grand Total</span>
            <span className="text-2xl font-bold text-yellow-400">₹{total}</span>
          </div>

          <button className="mt-6 w-full btn btn-yellow">
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}
