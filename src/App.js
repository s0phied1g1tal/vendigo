import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Sophie Van Schil</h1>
        <h2>Graphic and Digital Media</h2>
      </header>

      <section className="bio">
        <div className="bio-content">
          <h3>About Me</h3>
          <p>
            I'm a 3rd-year graphic design student with a passion for UI/UX
            design and digital media. My goal is to create visually appealing
            and user-friendly designs that make a difference.
          </p>
        </div>
        <div className="bio-image"></div> {/* Placeholder for your image */}
      </section>

      <section className="portfolio">
        <h3>My Portfolio</h3>
        <div className="portfolio-grid">
          <div className="portfolio-item">Project 1</div>
          <div className="portfolio-item">Project 2</div>
          <div className="portfolio-item">Project 3</div>
          <div className="portfolio-item">Project 4</div>
        </div>
      </section>

      <section className="contact">
        <h3>Contact</h3>
        <ul>
          <li>Email: sophie@example.com</li>
          <li>LinkedIn: <a href="https://linkedin.com">LinkedIn Profile</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Sophie Van Schil | All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
