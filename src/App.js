import React from "react";
import "./App.css";
import AppNavabar from "./componants/navbar/AppNavabar";
import Home from "./pages/home/Home";
import Productslist from "./pages/products/Productslist";
import Contactus from "./pages/contactUs/Contactus";
import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router";
import Productdetails from "./pages/productsDetails/Productdetails";
import Checkout from "./pages/checkout/Checkout";
import TrackingPage from "./pages/tracking/TrackingPage";

function App() {
  return (
    <div>
      <AppNavabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Productslist />} />
        <Route path="/products/:id" element={<Productdetails />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </div>
  );
}

export default App;
