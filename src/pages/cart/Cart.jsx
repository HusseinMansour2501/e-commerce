import React, { useEffect } from "react";
import "./cart.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart, // Mazwdnash de!
} from "../../rtk/slices/Cart-slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-page-wrapper">
      <div className="container">
        <h2 className="cart-title">Your Shopping Cart 🛒</h2>

        {cart.length === 0 ? (
          <div className="empty-cart-box shadow-sm">
            <p>Your cart is empty 😔</p>
            <Link to="/products" className="btn-go-shop">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            {/* Left Side: Items List */}
            <div className="cart-items-section">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>
                  Items in cart: <strong>{cart.length}</strong>
                </span>
                <button
                  className="btn-clear-all"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
              </div>

              {cart.map((item) => (
                <div className="cart-item-card shadow-sm" key={item.id}>
                  <div className="item-main-info">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="item-img"
                    />
                    <div className="item-text">
                      <h5>{item.title}</h5>
                      <p className="item-price-unit">${item.price}</p>
                    </div>
                  </div>

                  <div className="item-controls">
                    <div className="qty-box">
                      <button onClick={() => dispatch(decreaseQty(item.id))}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQty(item.id))}>
                        +
                      </button>
                    </div>

                    <p className="item-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      className="btn-delete-item"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Order Summary */}
            <div className="cart-summary-card shadow">
              <h4>Order Summary</h4>
              <hr />
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="summary-row total">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="btn-checkout-now">
                Proceed to Checkout
              </Link>
              <Link to="/products" className="btn-continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
