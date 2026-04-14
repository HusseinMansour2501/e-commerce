import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../rtk/slices/Cart-slice";
import { useNavigate } from "react-router";
import "./Checkout.css";


const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleOrder = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Confirm Your Order",
      text: `Total: $${totalPrice.toFixed(2)}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Pay Now",
      confirmButtonColor: "#7e67d3",
    }).then((result) => {
      if (result.isConfirmed) {
        
        dispatch(clearCart());

       
        localStorage.removeItem("cart");

        
        Swal.fire({
          title: "Success!",
          text: "Your cart is now empty and order is placed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        // 4. Go to Tracking
        setTimeout(() => {
          navigate("/tracking");
        }, 1500);
      }
    });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="order-summary">
        <p>Total Items: {cart.length}</p>
        <p>
          Total Price: <strong>${totalPrice.toFixed(2)}</strong>
        </p>
      </div>

      <form className="checkout-form" onSubmit={handleOrder}>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Phone Number" required />

        <button type="submit" className="place-order-btn">
          Place Order & Pay
        </button>
      </form>
    </div>
  );
};

export default Checkout;
