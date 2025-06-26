import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaSpinner } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      const form = e.target;
      const formData = new FormData(form);
      
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Thank you for your message! I will get back to you soon.'
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Sorry, there was a problem submitting your message. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss how we can work together</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-card">
              <Row>
                <Col md={6} className="contact-info">
                  <h3>Contact Information</h3>
                  <p>Feel free to reach out through any of these channels:</p>
                  
                  <div className="social-links">
                    <a href="https://github.com/dianadeliz" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/torres-diana" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin /> LinkedIn
                    </a>
                    <a href="mailto:dianaelizabeth_work@hotmail.com">
                      <FaEnvelope /> Email
                    </a>
                  </div>
                </Col>

                <Col md={6}>
                  {formStatus.submitted && (
                    <Alert variant="success" className="mb-4">
                      {formStatus.message}
                    </Alert>
                  )}
                  
                  {formStatus.error && (
                    <Alert variant="danger" className="mb-4">
                      {formStatus.message}
                    </Alert>
                  )}

                  <Form 
                    action="https://formspree.io/f/manjnwzq" 
                    method="POST"
                    className="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        minLength={2}
                        maxLength={50}
                        pattern="[A-Za-z\s]+"
                        title="Please enter a valid name (letters and spaces only)"
                        placeholder="Your name"
                      />
                      <Form.Text className="text-muted">
                        Enter your full name (2-50 characters)
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        placeholder="your.email@example.com"
                      />
                      <Form.Text className="text-muted">
                        Enter a valid email address
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        required
                        minLength={10}
                        maxLength={1000}
                        placeholder="Your message here..."
                      />
                      <Form.Text className="text-muted">
                        Minimum 10 characters, maximum 1000 characters
                      </Form.Text>
                    </Form.Group>

                    <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />

                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-100 submit-btn"
                      disabled={formStatus.submitting}
                    >
                      {formStatus.submitting ? (
                        <>
                          <FaSpinner className="spinner" /> Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 