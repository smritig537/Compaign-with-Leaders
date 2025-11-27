import { Link } from "react-router-dom";
import services from "../data/services.json";
import "../protocol.css";

export default function Home() {
  return (
    <section>
      {/* HERO */}
      <div
        style={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/assets/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", color: "white" }}>
          <h1
            style={{
              fontSize: "46px",
              fontWeight: "800",
              lineHeight: "1.2",
            }}
          >
            Political Party & NGO Registration Consultants
          </h1>
          <p style={{ maxWidth: "700px", marginTop: "15px", fontSize: "18px" }}>
            We help register political parties & NGOs, manage election campaigns,
            and provide legal & financial strategic advisory.
          </p>

          <Link
            to="/contact"
            style={{
              marginTop: "25px",
              display: "inline-block",
              padding: "12px 28px",
              background:
                "linear-gradient(to right, #FF9933, #FFFFFF, #138808)",
              borderRadius: "8px",
              fontWeight: "700",
              color: "#222",
              boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
            }}
          >
            Contact Our Experts
          </Link>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "70px 20px" }}>
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "20px",
            color: "#222",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            width: "160px",
            height: "6px",
            margin: "0 auto 40px",
            borderRadius: "6px",
            background:
              "linear-gradient(to right, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
          }}
        ></div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "26px",
          }}
        >
          {services.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              style={{
                padding: "28px",
                borderRadius: "14px",
                background: "#fff",
                borderTop: "6px solid #FF9933",
                borderBottom: "6px solid #138808",
                boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
                transition: "0.35s",
                textDecoration: "none",
                color: "#222",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-12px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3 style={{ fontSize: "20px", fontWeight: "700" }}>{s.title}</h3>
              <p style={{ marginTop: "10px", fontSize: "16px", color: "#555" }}>
                {s.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
