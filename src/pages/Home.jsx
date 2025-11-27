import React from "react";
import { Link } from "react-router-dom";
import services from "../data/services.json";
import '../protocol.css';
import Services from "./Services";
// Import hero image from src/assets
import heroImg from "../assets/hero.avif";
import Why from "./Why";

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

     <Services/>

      {/* WHY CHOOSE US */}
     <Why/>
    </>
  );
}
