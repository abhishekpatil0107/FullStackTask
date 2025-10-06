import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    setCartCount(totalCount);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300">
        AP Mart
      </Link>
      <div className="flex items-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">
          Cart
          <span className="cart-badge">{cartCount}</span>
        </Link>
        <Link to="/checkout" className="nav-link">Checkout</Link>
      </div>
    </nav>
  );
}
