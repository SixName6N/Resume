// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {

  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer-section">
      <div className="container footer-container">

        <div className="footer-copyright">
          <p>© {currentYear} Professional Portfolio. All rights reserved.</p>
        </div>

        <div className="footer-links">

          <a href="https://github.com/SixName6N" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:foqw007100@gmail.com">Email</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;