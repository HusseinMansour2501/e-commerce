import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { idProduct } from "../../rtk/slices/Details-slice";
import { addToCart } from "../../rtk/slices/Cart-slice"; // Import de mohem!
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "./productDetails.css";

const Productdetails = () => {
  const productDetails = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(idProduct(id));
    }
  }, [dispatch, id]);

  if (!productDetails || !productDetails.title) {
    return <div className="loader-container">Loading Product...</div>;
  }

  return (
    <Container className="product-details-container my-5">
      <Row className="align-items-center bg-white p-4 rounded-4 shadow-sm">
        {/* Left: Image Gallery / Main Image */}
        <Col lg={6} className="text-center mb-4 mb-lg-0">
          <div className="main-img-wrapper">
            <img
              src={productDetails.thumbnail}
              alt={productDetails.title}
              className="img-fluid main-product-img"
            />
            {productDetails.discountPercentage > 0 && (
              <Badge bg="danger" className="discount-badge">
                -{productDetails.discountPercentage}% OFF
              </Badge>
            )}
          </div>
        </Col>

        {/* Right: Product Info */}
        <Col lg={6}>
          <div className="product-info-section px-lg-4">
            <p className="text-muted text-uppercase mb-1">
              {productDetails.category}
            </p>
            <h1 className="display-5 fw-bold mb-3">{productDetails.title}</h1>

            <div className="rating-row mb-3">
              <span className="star-rating">⭐ {productDetails.rating}</span>
              <span className="ms-3 text-muted">
                ({productDetails.stock} units in stock)
              </span>
            </div>

            <div className="price-tag mb-4">
              <span className="current-price">${productDetails.price}</span>
              {productDetails.discountPercentage > 0 && (
                <span className="original-price ms-3">
                  $
                  {(
                    productDetails.price /
                    (1 - productDetails.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              )}
            </div>

            <p className="product-description text-secondary mb-4">
              {productDetails.description}
            </p>

            <div className="action-buttons d-flex gap-3">
              <button
                className="btn btn-primary btn-lg flex-grow-1 add-btn"
                onClick={() => dispatch(addToCart(productDetails))}
              >
                Add To Cart 🛒
              </button>
              <Link to="/cart" className="btn btn-outline-dark btn-lg">
                View Cart
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Productdetails;
