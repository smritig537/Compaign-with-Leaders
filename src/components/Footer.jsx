import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./protocol.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <img src={logo} alt="Protocol Expert logo" className="footer-logo" />

          <p>
            Campaign With Leaders provides consultancy for political parties,
            NGOs & organizations — registration, campaign management and
            legal-compliance services.
          </p>
          <p>📞 +91-7599518683</p>
          <p>📩 campaignwithleaders@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>Delhi, India-110001</p>
        </div>

      </div>

      <p className="footer-bottom">
        © 2025 Campaign With Leaders. All Rights Reserved 🇮🇳
      </p>
    </footer>
  );
}
