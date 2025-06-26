import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import backgroundImage from './assets/images/background.png';

import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Diana Torres | Biotechnology Engineer & Data Analyst</title>
        <meta name="description" content="Portfolio of Diana Torres - Biotechnology Engineer and Data Analyst specializing in statistical analysis, process improvement, and research applications" />
        <meta name="keywords" content="Diana Torres, Biotechnology Engineer, Data Analyst, Python, SQL, Statistical Analysis, Process Improvement, Research, Six Sigma" />
        <link rel="icon" type="image/svg+xml" href="/portfolio-icon.svg" />
        <link rel="apple-touch-icon" href="/portfolio-icon.jpg" />
        <meta name="theme-color" content="#3498db" />
      </Helmet>
      
      <div className="background-overlay" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <NavigationBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Other sections will be added here */}
    </div>
  );
}

export default App;
