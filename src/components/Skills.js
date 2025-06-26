import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaPython, FaDatabase, FaChartBar, FaFlask, 
  FaDna, FaBrain, FaProjectDiagram, FaCode,
  FaGitAlt, FaDocker, FaAws, FaLinux, FaRProject,
  FaFileAlt, FaMicrosoft, FaIndustry
} from 'react-icons/fa';
import { 
  SiPandas, SiTableau, SiMicrosoftsqlserver
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, level: "Advanced", description: "Data analysis, statistical computing, and scientific applications" },
        { name: "SQL", icon: <FaDatabase />, level: "Advanced", description: "Complex queries, database design, and optimization" },
        { name: "R", icon: <FaRProject />, level: "Advanced", description: "Statistical analysis and data visualization" },
        { name: "MATLAB", icon: <FaCode />, level: "Intermediate", description: "Numerical computing and simulation" }
      ]
    },
    {
      category: "Data Analysis & Statistics",
      skills: [
        { name: "Data Analysis", icon: <FaChartBar />, level: "Advanced", description: "Statistical analysis, hypothesis testing, and data-driven insights" },
        { name: "Data Visualization", icon: <SiTableau />, level: "Advanced", description: "Tableau, Power BI, and Python visualization libraries" },
        { name: "Statistical Modeling", icon: <FaCode />, level: "Advanced", description: "Regression analysis, hypothesis testing, and statistical inference" },
        { name: "Data Processing", icon: <SiPandas />, level: "Advanced", description: "Pandas, NumPy, and SciPy for data manipulation and analysis" },
        { name: "Databases", icon: <SiMicrosoftsqlserver />, level: "Advanced", description: "SQL Server, PostgreSQL, MySQL, and NoSQL databases" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Version Control", icon: <FaGitAlt />, level: "Advanced", description: "Git, GitHub, and collaborative development" },
        { name: "Containerization", icon: <FaDocker />, level: "Intermediate", description: "Docker and container orchestration" },
        { name: "Cloud Services", icon: <FaAws />, level: "Intermediate", description: "AWS services for data processing and storage" },
        { name: "Operating Systems", icon: <FaLinux />, level: "Advanced", description: "Linux/Unix systems and shell scripting" },
        { name: "Documentation", icon: <FaFileAlt />, level: "Advanced", description: "LaTeX for technical documentation and reports" },
        { name: "Office Suite", icon: <FaMicrosoft />, level: "Advanced", description: "Microsoft Office, Excel advanced features" }
      ]
    }
  ];

  const professionalSkills = [
    {
      category: "Research & Analysis",
      skills: [
        { name: "Data Analysis", icon: <FaChartBar />, description: "Statistical analysis, data visualization, and insights generation" },
        { name: "Laboratory Research", icon: <FaFlask />, description: "Experimental design, protocol development, and scientific methodology" },
        { name: "Biotechnology", icon: <FaDna />, description: "Molecular biology, genetic analysis, and bioprocess optimization" }
      ]
    },
    {
      category: "Management & Strategy",
      skills: [
        { name: "Project Management", icon: <FaProjectDiagram />, description: "PDCA & DMAIC frameworks, agile methodologies, and team leadership" },
        { name: "Critical Thinking", icon: <FaBrain />, description: "Problem-solving, analytical reasoning, and strategic planning" },
        { name: "Process Improvement", icon: <FaIndustry />, description: "Six Sigma methodologies, statistical process control, and quality systems" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="section-title">
          <h2>Skills & Expertise</h2>
          <p>A comprehensive overview of my technical and professional capabilities</p>
        </div>

        <Row>
          <Col lg={6} className="mb-4">
            <Card className="skills-card">
              <Card.Body>
                <h3 className="card-title">Technical Skills</h3>
                {technicalSkills.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h4>{category.category}</h4>
                    <div className="skills-grid">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <div className="skill-icon">{skill.icon}</div>
                          <div className="skill-info">
                            <h5>{skill.name}</h5>
                            {skill.level && <span className="skill-level">{skill.level}</span>}
                            {skill.description && <p className="skill-description">{skill.description}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="skills-card">
              <Card.Body>
                <h3 className="card-title">Professional Skills</h3>
                {professionalSkills.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h4>{category.category}</h4>
                    <div className="skills-grid">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <div className="skill-icon">{skill.icon}</div>
                          <div className="skill-info">
                            <h5>{skill.name}</h5>
                            <p className="skill-description">{skill.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills; 