import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
A focused business consultancy, delivering exceptional services, strategically future-proofing for global growth and sustained prominence.</p>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/process">Process</a></li>
          <li><a href="/ideation">Ideation</a></li>
          <li><a href="/markets">Markets</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:info@egobas.com">info@egobas.com</a></p>
        <p>Phone: +44 781 448 3083</p>
        <p>Address: 71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ </p>
      </div>
      
    </footer>
  );
}

export default Footer;
