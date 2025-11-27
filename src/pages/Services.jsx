import React from "react";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services.json";
import "../styles/services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Professional Services</h2>
        <div className="services-line"></div>

        <p className="services-subtext">
          Strategic, Legal & Operational Solutions for Political Parties, NGOs, Leaders & Organizations across India.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
