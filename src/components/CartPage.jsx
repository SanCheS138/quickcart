import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
<div className="cart-page">
  <h1>Your Cart</h1>
  {cart.length === 0 ? (
    <div className="empty-cart-page">
      <p>No items in cart</p>
    </div>
  ) : (
    <div className="cart-page-content">
      <div className="cart-items-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-page-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-page-item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Summary</h2>
        <p>Total: ${getTotalPrice().toFixed(2)}</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  )}
</div>

  );
}

export default CartPage;
