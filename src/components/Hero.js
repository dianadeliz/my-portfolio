import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Hero.css';

const Hero = () => {
  const handleResumeDownload = () => {
    // Resume file path - opens PDF in new tab
    const pdfUrl = '/assets/resume/dataAnalyst_DT.pdf';
    
    // Create a temporary link element to ensure proper handling
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = 'Diana_Torres_Resume.pdf'; // Optional: suggest filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">
              Diana Torres
            </h1>
            <h2 className="h3 mb-4 text-muted">
              Biotechnology Engineer & Data Analyst
            </h2>
            <p className="lead mb-5">
              Leveraging my background in Biotechnology Engineering and passion for data analysis
              to drive insights across research and industrial applications. Specializing in Python, SQL, and
              statistical analysis to transform complex data into actionable insights for process improvement
              and research innovation.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="resume-btn"
              onClick={handleResumeDownload}
            >
              View Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 