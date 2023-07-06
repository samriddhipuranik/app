import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import axios from "axios";
import "./Cart.css";

function Cart() {
  const { cartItems, addItem, removeItem } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addItem(product);
  };

  const handleRemoveFromCart = (productId) => {
    removeItem(productId);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul className="products-list">
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.title}</span>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h3>Cart Items:</h3>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.title}</span>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total items: {cartItems.length}</p>
      <p>Subtotal: INR {calculateSubtotal().toFixed(2)}</p>
    </div>
  );
}

export default Cart;
