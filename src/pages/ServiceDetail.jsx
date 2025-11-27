import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../data/services.json";
import "../styles/serviceDetail.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="service-detail-section">
        <div className="service-detail-container">
          <h2 className="service-title">Service Not Found</h2>
          <p>We couldn't find that service.</p>
          <Link to="/services" className="service-btn">Back to Services</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="service-detail-section">
      <div className="service-detail-container card">
        <h2 className="service-title">{service.title}</h2>

        <p className="service-content">
          {service.content}
        </p>

        <Link to="/contact" className="service-btn">
          Contact Us About This Service
        </Link>
      </div>
    </section>
  );
}
