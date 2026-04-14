import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./categoryBar.css";

const CategoryBar = () => {
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();

  

  // 1. Extract unique categories men el-products
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const [activeCat, setActiveCat] = useState("all");

  const handleCategoryClick = (cat) => {
    setActiveCat(cat); 
    navigate(`/products`, { state: { selectedCategory: cat } });
  };

  return (
    <div className="category-bar-wrapper">
      <div className="container">
        <div className="category-items">
          {categories.map((cat) => (
            <button
              key={cat.id}
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
