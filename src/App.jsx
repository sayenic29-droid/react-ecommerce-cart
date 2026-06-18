import React, { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const item = cart.find((p) => p.id === product.id);

    if (item) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Mini E-Commerce Cart</h1>

      <h2>Products</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "150px" }}>
            <p style={{ fontWeight: "bold", margin: "0 0 10px 0" }}>{product.name}</p>
            <p style={{ color: "#555" }}>₹{product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p style={{ color: "#888" }}>Cart is Empty</p>
      ) : (
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", maxWidth: "400px" }}>
          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <p style={{ margin: 0 }}>
                {item.name} - Qty: <strong>{item.quantity}</strong>
              </p>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "3px 8px", borderRadius: "4px", cursor: "pointer" }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <h3 style={{ marginTop: "20px", color: "#333" }}>Total Price: ₹{total}</h3>
    </div>
  );
}

export default App;
