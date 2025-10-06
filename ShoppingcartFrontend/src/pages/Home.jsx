import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

import Headphones from "../assets/Headphones.jpeg";
import MechanicalKeyboard from "../assets/MechanicalKeyboard.jpg";
import PortableSSD from "../assets/Portable_SSD_512GB.jpg";
import Smartwatch from "../assets/Smartwatch.jpeg";
import USBC_Hub from "../assets/USB-C_Hub.jpg";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const imageMap = {
    "Wireless Headphones": Headphones,
    "Mechanical Keyboard": MechanicalKeyboard,
    "Portable SSD 512GB": PortableSSD,
    "Smartwatch": Smartwatch,
    "USB-C Hub": USBC_Hub,
  };

  
  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(res => {
        const productsWithImages = res.data.map(product => ({
          ...product,
          image: imageMap[product.name] || "/assets/placeholder.jpg",
        }));
        setProducts(productsWithImages);
      })
      .catch(err => console.error(err));
  }, []);

  
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        
        return prev.map(p => 
          p.id === product.id ? { ...p, quantity: p.quantity + 1, price: product.price } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Shop Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
