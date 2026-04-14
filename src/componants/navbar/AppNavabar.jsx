import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../image-react/Logo.svg";
import { useSelector } from "react-redux";
import "./navbar.css";

const AppNavabar = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate("/products", { state: { searchQuery: searchTerm } });
      setSearchTerm("");
      setShowDropdown(false);
    }
  };

 
  const liveSearchResults = products
    .filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .slice(0, 5);
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" width={130} className="logo-img" />
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Search Section */}
          <div className="search-wrapper mx-auto">
            <Form className="d-flex search-form" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="search-input" // Shelna el-paddings el-zyada
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />
              <Button type="submit" className="search-btn m-0">
                {" "}
                {/* m-0 3ashan neshel ay margin margin */}
                Search
              </Button>
            </Form>

            {/* Live Search Dropdown */}
            {showDropdown && searchTerm.length > 0 && (
              <div className="search-dropdown shadow">
                {liveSearchResults.length > 0 ? (
                  liveSearchResults.map((p) => (
                    <Link
                      to={`/products/${p.id}`}
                      key={p.id}
                      className="dropdown-item-custom"
                      onClick={() => setSearchTerm("")}
                    >
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        width={40}
                        className="me-3"
                      />
                      <div className="d-flex flex-column">
                        <span
                          className="fw-bold"
                          style={{ fontSize: "0.85rem" }}
                        >
                          {p.title}
                        </span>
                        <span
                          className="text-muted"
                          style={{ fontSize: "0.7rem" }}
                        >
                          In {p.category}
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-3 text-muted text-center">
                    No products found
                  </div>
                )}
              </div>
            )}
          </div>

          <Nav className="ms-auto align-items-center">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`nav-link ${location.pathname === "/products" ? "active-link" : ""}`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active-link" : ""}`}
            >
              Contact
            </Link>
            <Link to="/cart" className="nav-link cart-icon-wrapper">
              <span className="cart-emoji">🛒</span>
              {cart.length > 0 && (
                <span className="cart-badge">{cart.length}</span>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};;

export default AppNavabar;
