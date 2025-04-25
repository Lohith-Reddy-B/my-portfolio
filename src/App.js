import React from 'react';
import './App.css';
import profileImg from './assets/image.jpg'; // Make sure to add an image to src/assets/

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">MyPortfolio</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Banner */}
      <section className="hero">
        <img src={profileImg} alt="Profile" className="hero-img" />
        <h1>Hello, I'm Lohith Reddy B</h1>
        <p>Frontend Developer | React Enthusiast | Problem Solver</p>
      </section>

      {/* About Section */}
<section id="about" className="section">
  <h2>About Me</h2>
  <p>
    I'm a passionate web developer focused on building responsive, user-friendly websites and applications. 
    I enjoy turning complex problems into elegant solutions.
  </p>
  <a href="/resume.pdf" download className="resume-btn">View Resume</a>
</section>

      {/* Projects Section */}
<section id="projects" className="section">
  <h2>Projects</h2>
  <div className="project-grid">
    <div className="project-card text-only">
      <h3>Portfolio Website</h3>
      <p>A clean and minimal portfolio site built with React and styled with CSS.</p>
      <a href="#" target="_blank" rel="noreferrer">View Project</a>
    </div>
    <div className="project-card text-only">
      <h3>Todo App</h3>
      <p>Simple task management app using React with local storage support.</p>
      <a href="#" target="_blank" rel="noreferrer">View Project</a>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <p>JavaScript, React, HTML, CSS, Git, Node.js</p>
      </section>

     {/* Contact Section */}
<section id="contact" className="section">
  <h2>Contact</h2>
  <p>Email: <a href="mailto:lohithreddy610@gmail.com">lohithreddy610@gmail.com</a></p>
  <p>
    LinkedIn: <a href="https://www.linkedin.com/in/lohith-reddy-b-619076257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
      linkedin.com/in/yourprofile
    </a>
  </p>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MyPortfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
