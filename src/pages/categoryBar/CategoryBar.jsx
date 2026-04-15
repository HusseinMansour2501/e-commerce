import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./categoryBar.css";

const CategoryBar = () => {
  const productsData = useSelector((state) => state.products);

  const products = Array.isArray(productsData)
    ? productsData
    : productsData?.products || [];

  const navigate = useNavigate();

  const categories = [
    "all",
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  const [activeCat, setActiveCat] = useState("all");

  const handleCategoryClick = (cat) => {
    setActiveCat(cat);
    navigate(`/products`, { state: { selectedCategory: cat } });
  };

  return (
    <div className="category-bar-wrapper">
      <div className="container">
        <div className="category-items">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`cat-btn ${activeCat === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
