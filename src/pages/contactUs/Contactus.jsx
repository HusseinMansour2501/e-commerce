import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // E-mela el-IDs de men account EmailJS beta3ak
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          alert("Success! Your discount code is on its way.");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong, please try again.");
        },
      );
  };

  return (
    <div className="contact-page">
      <Container>
        <Row className="justify-content-center w-100 m-0">
          <Col md={10} lg={6} className="contact-container text-center">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">
              Fill the form to unlock your 20% OFF coupon!
            </p>

            <Form ref={form} onSubmit={sendEmail} className="text-start">
              <Form.Group className="mb-4">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="I want my discount code..."
                />
              </Form.Group>

              <Button className="btn-send w-100" type="submit">
                Send & Get My Code 🚀
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
