import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChartLine, FaDna, FaFlask, FaCode, FaBrain, FaProjectDiagram } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-title">
          <h2>About Me</h2>
          <p>Combining Biotechnology Engineering with Data Analysis</p>
        </div>
        
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="skills-icons">
              <div className="icon-container">
                <FaChartLine className="skill-icon" />
                <span>Data Analysis</span>
              </div>
              <div className="icon-container">
                <FaDna className="skill-icon" />
                <span>Biotechnology</span>
              </div>
              <div className="icon-container">
                <FaFlask className="skill-icon" />
                <span>Research</span>
              </div>
              <div className="icon-container">
                <FaCode className="skill-icon" />
                <span>Programming</span>
              </div>
              <div className="icon-container">
                <FaBrain className="skill-icon" />
                <span>Critical Thinking</span>
              </div>
              <div className="icon-container">
                <FaProjectDiagram className="skill-icon" />
                <span>Project Management</span>
                <small className="framework-text"></small>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <Card className="about-card">
              <Card.Body>
                <h3 className="mb-4">Biotechnology Engineer & Data Analyst</h3>
                <p className="mb-4">
                  As a Biotechnology Engineer with a strong foundation in biological sciences and
                  laboratory research, I've developed a unique perspective on data analysis and
                  technological solutions across research and industrial contexts. My expertise in
                  Python and SQL enables me to transform complex biological and industrial data into actionable
                  insights, while my background in biotechnology ensures a deep understanding of
                  the scientific context.
                </p>
                
                <div className="skills-highlight">
                  <h4 className="mb-3">Key Expertise</h4>
                  <ul className="skills-list">
                    <li>
                      <strong>Data Analysis & Statistics:</strong> Proficient in Python and SQL for
                      analyzing complex datasets, statistical modeling, and data visualization
                    </li>
                    <li>
                      <strong>Process Improvement:</strong> Specialized in Six Sigma methodologies,
                      statistical process control, and quality improvement systems
                    </li>
                    <li>
                      <strong>Technical Skills:</strong> Python, SQL, Data Visualization, Statistical
                      Analysis, and Bioinformatics Tools
                    </li>
                    <li>
                      <strong>Biotechnology Research:</strong> Extensive experience in laboratory
                      research, experimental design, and scientific data interpretation
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 