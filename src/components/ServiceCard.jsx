import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <h3>{service.title}</h3>
      <p>{service.excerpt}</p>

      <div style={{ marginTop: 12 }}>
        <Link className="btn" to={`/services/${service.slug}`}>
          Read more
        </Link>
      </div>
    </article>
  );
}
