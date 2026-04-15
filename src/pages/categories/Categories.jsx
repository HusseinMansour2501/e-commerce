import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./categories.css";

const Categories = () => {
  const productsData = useSelector((state) => state.products);

  const products = Array.isArray(productsData)
    ? productsData
    : productsData?.products || [];

  const uniqueCategories = [];
  const seenCategories = new Set();

  if (Array.isArray(products)) {
    products.forEach((product) => {
      if (product.category && !seenCategories.has(product.category)) {
        seenCategories.add(product.category);
        uniqueCategories.push({
          name: product.category,
          image: product.thumbnail,
        });
      }
    });
  }

  const displayCategories = uniqueCategories.slice(0, 4);

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {displayCategories.length > 0 ? (
            displayCategories.map((cat, index) => (
              <Link to={`/products`} key={index} className="category-card">
                <div className="category-overlay"></div>
                <img src={cat.image} alt={cat.name} className="category-img" />
                <div className="category-info">
                  <h3>{cat.name}</h3>
                  <span>Explore Products</span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center w-100">Loading Categories...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
