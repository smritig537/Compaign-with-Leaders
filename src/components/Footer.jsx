import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg,#FF9933,#FFFFFF,#138808)",
        padding: "50px 20px",
        marginTop: "auto",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: "360px", color: "#222" }}>
          <img
            src={logo}
            alt="Protocol Expert logo"
            style={{
              width: "80px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              marginBottom: "12px",
            }}
          />

          <p>
            Campaign With Leaders provides consultancy for political parties,
            NGOs & organizations — registration, campaign management and
            legal-compliance services.
          </p>
          <p>📞 +91-7599518683</p>
          <p>📩 campaignwithleaders@gmail.com</p>
        </div>

        <div>
          <h4 style={{ fontWeight: "700", marginBottom: "10px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.9" }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: "700", marginBottom: "10px" }}>Address</h4>
          <p>Delhi, India-110001</p>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "30px", fontWeight: "600" }}>
        © 2025 Campaign With Leaders. All Rights Reserved 🇮🇳
      </p>
    </footer>
  );
}
