import React from "react";

export default function Why() {
  return (
    <section
      style={{
        padding: "90px 20px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, rgba(255,153,51,0.18) 0%, rgba(255,255,255,0.9) 50%, rgba(19,136,8,0.18) 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Title with tricolor underline */}
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "800",
            color: "#222",
            marginBottom: "15px",
            textTransform: "uppercase",
          }}
        >
          Why Choose Us
        </h2>

        <div
          style={{
            width: "140px",
            height: "6px",
            margin: "0 auto 35px",
            borderRadius: "6px",
            background:
              "linear-gradient(to right, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
          }}
        ></div>

        <p
          style={{
            fontSize: "20px",
            color: "#333",
            maxWidth: "780px",
            margin: "0 auto 60px",
            lineHeight: "1.7",
            fontWeight: "500",
          }}
        >
          We empower leaders, organizations, and social change movements with
          strategy, technology and public engagement. Our expertise helps build
          strong influence and deliver impactful results.
        </p>

        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Proven Experience",
              desc: "Expertise in public relations, campaign management & digital engagement.",
            },
            {
              title: "Results That Matter",
              desc: "Strategic planning with measurable outcomes that drive real success.",
            },
            {
              title: "Creative & Modern Strategy",
              desc: "Brand storytelling, digital intelligence, and innovative execution.",
            },
            {
              title: "Trusted Across India",
              desc: "Strong connections & trust built through successful leadership projects.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                padding: "35px",
                borderRadius: "14px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
                transition: "0.35s",
                borderTop: "6px solid #FF9933",
                borderBottom: "6px solid #138808",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "14px",
                  color: "#222",
                  fontWeight: "700",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
