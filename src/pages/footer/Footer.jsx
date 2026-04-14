import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import Logo from "../../image-react/Logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          {/* Column 1: Brand & About */}
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <Link to="/" className="footer-brand">
              <img src={Logo} alt="Logo" width={140} className="mb-3" />
            </Link>
            <p className="footer-about-text">
              Elevating your lifestyle with our premium collection. The best
              quality products at your fingertips.
            </p>
            <div className="social-icons">
              <Link to="#" className="fb-hover">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="#" className="ig-hover">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link to="#" className="x-hover">
                <i className="bi bi-twitter-x"></i>
              </Link>
            </div>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/cart">My Cart</Link>
              </li>
            </ul>
          </Col>

          {/* Column 3: Categories */}
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Shop</h5>
            <ul className="footer-links">
              <li>
                <Link to="/products">Laptops</Link>
              </li>
              <li>
                <Link to="/products">Smartphones</Link>
              </li>
              <li>
                <Link to="/products">Watches</Link>
              </li>
              <li>
                <Link to="/products">Accessories</Link>
              </li>
            </ul>
          </Col>

          {/* Column 4: Contact Info */}
          <Col lg={4} md={6}>
            <h5 className="footer-heading">Contact Info</h5>
            <ul className="footer-contact-info">
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i> Cairo, Egypt
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i> +20 123 456 789
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i> support@store.com
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <div className="footer-bottom d-flex justify-content-between align-items-center">
          <p className="mb-0">© 2026 YourStore. All rights reserved.</p>
          <div className="payment-icons">
            <i className="bi bi-credit-card-2-back me-2"></i>
            <i className="bi bi-paypal me-2"></i>
            <i className="bi bi-apple"></i>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
