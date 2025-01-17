// Vite React Project Starter
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Separate CSS file

// Main App Component
const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProcessSection />
      <BioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

// Individual sections of the site
const HeroSection = () => (
  <section className="hero">
    <h1>Revolutionizing Vending Machines</h1>
    <p>Simpler. Smarter. More Accessible.</p>
    <button className="cta">Learn More</button>
  </section>
);

const AboutSection = () => (
  <section className="about">
    <h2>About Vendigo</h2>
    <p>Vendigo is dedicated to making vending machines more intuitive, accessible, and user-friendly.</p>
    <img src="https://via.placeholder.com/300" alt="Vending Machine Concept" />
  </section>
);

const FeaturesSection = () => (
  <section className="features">
    <h2>Key Features</h2>
    <ul>
      <li>Accessibility for Everyone</li>
      <li>Optimized Speed and Simplicity</li>
      <li>Clear Product Information</li>
      <li>Commercial Benefits</li>
    </ul>
  </section>
);

const ProcessSection = () => (
  <section className="process">
    <h2>Our Process</h2>
    <ol>
      <li>Understand</li>
      <li>Explore</li>
      <li>Materialize</li>
      <li>Finalize</li>
    </ol>
  </section>
);

const BioSection = () => (
  <section className="bio">
    <h2>About Me</h2>
    <p>Hi, I’m Sophie Van Schil, a passionate designer focused on UX and UI solutions. Let’s connect!</p>
    <img src="https://via.placeholder.com/150" alt="Sophie Van Schil" />
  </section>
);

const ContactSection = () => (
  <section className="contact">
    <h2>Contact</h2>
    <p>Email: sophie@example.com</p>
    <p>Portfolio: <a href="https://yourportfolio.com">View Here</a></p>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Vendigo. All Rights Reserved.</p>
  </footer>
);

export default App;
