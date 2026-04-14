import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { addToCart } from "../../rtk/slices/Cart-slice";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import "./products.css";
import CategoryBar from "../categoryBar/CategoryBar";

const Productslist = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const location = useLocation();

  const searchQuery = location.state?.searchQuery || "";
  // 1. Get the category from location state (if it exists)
  const selectedCat = location.state?.selectedCategory || "all";

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((p) => {
    // 1. Check el-Category Filter 
    const matchesCat = selectedCat === "all" || p.category === selectedCat;

    // 2. Check el-Search Query (Title OR Category)
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="products-page">
      <div className="page-header text-center py-5">
        <h1 className="display-4 fw-bold">
          {selectedCat === "all" ? "Our Products" : `${selectedCat}`}
        </h1>
        <p className="text-muted">Discover our exclusive collection</p>
        <CategoryBar />
      </div>

      <Container className="mb-5">
        <Row>
          {filteredProducts.map((product) => (
            <Col
              lg={3}
              md={4}
              sm={6}
              xs={12}
              key={product.id}
              className="d-flex justify-content-center"
            >
              <Card className="product-card">
                <div className="card-img-container">
                  <Card.Img variant="top" src={product.thumbnail} />
                  {product.discountPercentage > 0 && (
                    <Badge bg="danger" className="promo-badge">
                      -{Math.round(product.discountPercentage)}%
                    </Badge>
                  )}
                </div>

                <Card.Body className="d-flex flex-column">
                  <div className="category-label">{product.category}</div>
                  <Card.Title className="product-title">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="product-desc">
                    {product.description.slice(0, 50)}...
                  </Card.Text>

                  <div className="price-section mt-auto">
                    <span className="price-now">${product.price}</span>
                    {product.discountPercentage > 0 && (
                      <span className="price-old">
                        $
                        {(
                          product.price /
                          (1 - product.discountPercentage / 100)
                        ).toFixed(0)}
                      </span>
                    )}
                  </div>

                  <div className="card-buttons mt-3">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn-details"
                    >
                      Details
                    </Link>
                    <button
                      className="btn-add-cart"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add 🛒
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Productslist;
