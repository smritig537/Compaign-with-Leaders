import React from "react";
import { Link } from "react-router-dom";
import services from "../data/services.json";
import '../protocol.css';

// Import hero image from src/assets
import heroImg from "../assets/hero.avif";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Campaign With Leaders
            </h1>

            <p className="hero-text">
              We help register parties, manage election campaigns, and provide
              legal & financial advisory.
            </p>

            <div style={{ marginTop: 18 }}>
              <Link to="/services" className="btn">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="services-grid">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className="service-card">
                  <h3>{s.title}</h3>
                  <p>{s.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: "#f6f9ff" }}>
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>

          <p style={{ maxWidth: 800 }}>
            Experienced consultants with domain expertise in political
            compliance, NGO law, campaign strategy and fund management. We
            deliver practical and legally-sound solutions.
          </p>
        </div>
      </section>
    </>
  );
}
