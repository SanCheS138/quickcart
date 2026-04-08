import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartSidebar.css';

function CartSidebar() {
  const { isCartOpen, toggleCart, cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <aside className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleCart}>✖</button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <div className="cart-controls">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">Total: ${getTotalPrice().toFixed(2)}</div>
        </>
      )}
    </aside>
  );
}

export default CartSidebar;
