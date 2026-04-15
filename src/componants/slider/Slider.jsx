import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ضيف ستايل الـ navigation لو مش موجود

import "./slider.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom"; // تأكد إنك بتعمل import من react-router-dom

const Slider = () => {
  const productsData = useSelector((state) => state.products);

  const products = Array.isArray(productsData)
    ? productsData
    : productsData?.products || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!products || products.length === 0) {
    return <div className="text-center p-5">Loading Featured Products...</div>;
  }

  return (
    <>
      <h2 className="featured-title">Featured Products</h2>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mySwiper"
        >
          {products.slice(0, 5).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="slide-inner">
                <div className="slide-text">
                  <span className="category-tag">{product.category}</span>
                  <h2>{product.title}</h2>
                  <p>${product.price}</p>
                  <Link to={`/products/${product.id}`} className="shop-now-btn">
                    Shop Now
                  </Link>
                </div>
                <div className="slide-image">
                  <img
                    src={product.thumbnail || product.images?.[0]}
                    alt={product.title}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link to="/products" className="button-details">
        View All Products
      </Link>
    </>
  );
};

export default Slider;
