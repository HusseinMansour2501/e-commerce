import React, { useMemo } from "react";
import { useNavigate } from "react-router";

const TrackingPage = () => {
  const navigate = useNavigate();

  // Ben-generate el-tari5 mara wa7da awel ma el-page t-open
  // 3ashan mayfsh y-change kol ma te3mel re-render (useMemo)
  const deliveryDetails = useMemo(() => {
    const date = new Date();
    // Nezwed men 2 le 5 ayyam 3ashwa2i
    const randomDays = Math.floor(Math.random() * 4) + 2;
    date.setDate(date.getDate() + randomDays);

    const options = { weekday: "long", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Sa3a 3ashwa2eya
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = ["00", "15", "30", "45"][Math.floor(Math.random() * 4)];
    const ampm = Math.random() > 0.5 ? "AM" : "PM";

    return {
      date: formattedDate,
      time: `${hours}:${minutes} ${ampm}`,
      orderId: Math.floor(Math.random() * 1000000),
    };
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "10px" }}>🚚</h1>
      <h2 style={{ color: "#2c3e50" }}>Your Order is on its way!</h2>
      <p style={{ color: "#777" }}>
        Order ID: <strong>#RTK-{deliveryDetails.orderId}</strong>
      </p>

      {/* Box el-Delivery Date */}
      <div
        style={{
          background: "#f0eeff",
          border: "1px solid #7e67d3",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "400px",
          margin: "30px auto",
          boxShadow: "0 4px 15px rgba(126, 103, 211, 0.1)",
        }}
      >
        <h4 style={{ margin: "0 0 10px 0", color: "#7e67d3" }}>
          Estimated Delivery
        </h4>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "5px 0" }}>
          {deliveryDetails.date}
        </p>
        <p style={{ margin: 0, opacity: 0.8 }}>By {deliveryDetails.time}</p>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          margin: "20px auto",
          width: "300px",
          height: "8px",
          backgroundColor: "#eee",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#7e67d3",
            position: "absolute",
            animation: "load 2s infinite linear",
          }}
        ></div>
      </div>

      <p style={{ marginTop: "15px" }}>
        Status:{" "}
        <span style={{ color: "#27ae60", fontWeight: "bold" }}>In Transit</span>
      </p>

      <div style={{ marginTop: "40px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 25px",
            cursor: "pointer",
            backgroundColor: "#7e67d3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#6a54b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#7e67d3")}
        >
          Continue Shopping
        </button>
      </div>

      <style>{`
        @keyframes load {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default TrackingPage;
