import React from "react";
import "./features.css";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: "🚚",
      title: "Free Shipping",
      desc: "On all orders over $100",
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Secure Payment",
      desc: "100% protected payments",
    },
    { id: 3, icon: "🔄", title: "Easy Returns", desc: "30 days return policy" },
    {
      id: 4,
      icon: "🎧",
      title: "24/7 Support",
      desc: "Dedicated support team",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {featuresData.map((f) => (
            <div className="feature-item" key={f.id}>
              <div className="icon-box">{f.icon}</div>
              <div className="text-box">
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
