import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaDna, FaDatabase, FaBicycle, FaIndustry, FaCogs, FaComments, FaCode } from 'react-icons/fa';
import { SiPython, SiPandas, SiTableau, SiMicrosoftsqlserver, SiR, SiReact, SiSpring, SiMongodb, SiBootstrap, SiJavascript } from 'react-icons/si';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bike Share Usage Analysis",
      description: "Comprehensive analysis of Divvy bike-share usage patterns between member and casual users. Analyzed trip data from 2019 Q1 to 2020 Q1 to identify key usage trends and preferences.",
      longDescription: "This project explores bike-share usage patterns by analyzing Divvy trip data from 2019 Q1 to 2020 Q1. The analysis was conducted using R, with data visualizations created in both R and Tableau. Key insights focus on ride duration, usage distribution by day of week, and weekend preferences between member and casual users.",
      technologies: [
        { name: "R", icon: <SiR /> },
        { name: "Tableau", icon: <SiTableau /> },
        { name: "Data Analysis", icon: <FaChartLine /> },
        { name: "Data Visualization", icon: <FaBicycle /> }
      ],
      image: "/assets/images/projects/bike-analysis.png",
      fallbackIcon: <FaBicycle />,
      projectLink: "https://github.com/dianadeliz/bike-analysis",
      category: "Data Analysis"
    },
    {
      id: 2,
      title: "Six Sigma Improvement Plan - ArcelorMittal Oxygen Plant",
      description: "Developed comprehensive Six Sigma analysis tools for statistical process control (SPC) and Gage R&R studies. Implemented Python-based solutions for process capability analysis and quality improvement.",
      longDescription: "Created Python tools for Six Sigma analysis and statistical process control (SPC) specifically designed for the ArcelorMittal Oxygen Plant improvement plan. The project includes X-bar and R control charts, process capability analysis (Cp, Cpk), and comprehensive Gage R&R studies for measurement system analysis.",
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "Six Sigma", icon: <FaCogs /> },
        { name: "Statistical Analysis", icon: <FaChartLine /> },
        { name: "Manufacturing", icon: <FaIndustry /> }
      ],
      image: "/assets/images/projects/six-sigma.png",
      fallbackIcon: <FaCogs />,
      projectLink: "https://github.com/dianadeliz/Improvement-Plan-with-Six-Sigma-in-the-ArcelorMittal-Oxygen-Plant-Mexico",
      category: "Process Improvement"
    },
    {
      id: 3,
      title: "Discussion Board Web Application",
      description: "Full-stack web application built with React and Spring Boot. Features user authentication, discussion threads, and admin management with JWT security and MongoDB database.",
      longDescription: "A comprehensive discussion board application with React frontend and Spring Boot backend. Features include user registration/login with JWT authentication, discussion thread creation, post replies, and admin-only content management. Built with modern web technologies including Bootstrap for responsive design and MongoDB for data storage.",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Spring Boot", icon: <SiSpring /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "JWT", icon: <FaComments /> }
      ],
      image: "/assets/images/projects/discussion-board.png",
      fallbackIcon: <FaComments />,
      projectLink: "https://github.com/dianadeliz/CSD230Lab2",
      category: "Web Development"
    }
  ];

  const handleImageError = (e, fallbackIcon) => {
    e.target.style.display = 'none';
    const iconContainer = e.target.parentElement.querySelector('.project-fallback-icon');
    if (iconContainer) {
      iconContainer.style.display = 'flex';
    }
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Showcasing my expertise in data analysis, biotechnology, and web development</p>
        </div>

        <Row>
          {projects.map((project) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card className="project-card">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    onError={(e) => handleImageError(e, project.fallbackIcon)}
                  />
                  <div className="project-fallback-icon">
                    {project.fallbackIcon}
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.projectLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                
                <Card.Body>
                  <div className="project-header">
                    <Badge bg="primary" className="project-category">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                  
                  <div className="project-technologies">
                    <h6>Technologies Used:</h6>
                    <div className="tech-badges">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          bg="light" 
                          text="dark" 
                          className="tech-badge"
                        >
                          <span className="tech-icon">{tech.icon}</span>
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects; 