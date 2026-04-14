import React from "react";
import { useNavigate } from "react-router-dom";
import "./newsletter.css";

const Newsletter = () => {
  const navigate = useNavigate();

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box text-center">
          <div className="newsletter-content">
            <h2 className="fw-bold text-white mb-3">Want 20% Discount? 🎁</h2>
            <p className="text-white mb-4">
              Join our exclusive community today! Contact us now and receive a
              20% discount code straight to your inbox.
            </p>
            <button
              className="btn-go-contact"
              onClick={() => navigate("/contact")}
            >
              Claim My Discount Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
