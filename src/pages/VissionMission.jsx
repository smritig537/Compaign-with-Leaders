import React from "react";
import "../styles/vision.css";

export default function VisionMission() {
  return (
    <section className="vm-section">
      <div className="vm-container">
        <h2 className="vm-title">Vision & Mission</h2>
        <div className="vm-line"></div>

        <p className="vm-subtext">
          Strengthening leadership, governance, and public impact through strategy, compliance,
          and progressive nation-building.
        </p>

        <div className="vm-grid">
          <div className="vm-box">
            <h3>Our Vision</h3>
            <p>
              To empower India’s future leadership ecosystem by enabling transparent,
              accountable and progressive political & social organizations nationwide.
            </p>
          </div>

          <div className="vm-box">
            <h3>Our Mission</h3>
            <p>
              To deliver end-to-end strategic guidance, ethical advisory and operational support
              for leaders, NGOs and institutions driving real societal transformation.
            </p>
          </div>
        </div>

        <p className="vm-quote">Empowering Leadership. Inspiring Change. 🇮🇳</p>
      </div>
    </section>
  );
}
