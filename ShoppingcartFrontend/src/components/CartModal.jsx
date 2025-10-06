import React from "react";

export default function CartModal({ cart, close, updateQuantity, checkout }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-xl shadow-xl w-11/12 md:w-2/3 p-6 relative">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">🛍️ Your Cart</h2>
        <button
          className="absolute top-3 right-4 text-gray-300 font-bold text-xl hover:text-yellow-400 transition-colors duration-300"
          onClick={close}
        >
          ✕
        </button>
        {cart.length === 0 ? (
          <p className="text-gray-300">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-700 max-h-96 overflow-y-auto">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-4">
                    <div className="cart-img rounded overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover"/>
                    </div>
                    <div className="text-left">
                      <p className="text-gray-100 font-medium truncate w-48">{item.name}</p>
                      <p className="text-gray-400 text-sm">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="btn btn-gray"
                    >
                      -
                    </button>
                    <span className="text-gray-100 w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="btn btn-gray"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-gray-100 font-bold w-20 text-right">
                    ₹{item.price * item.quantity}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-right font-semibold text-yellow-400 mt-4 text-lg">
              Total: ₹{total.toFixed(2)}
            </p>
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={close} className="btn btn-gray">Close</button>
              <button onClick={checkout} className="btn btn-yellow">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
