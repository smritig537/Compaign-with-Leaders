import React from "react";

export default function About() {
  return (
    <section
      style={{
        padding: "90px 20px",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(255,153,51,0.18) 0%, rgba(255,255,255,0.9) 50%, rgba(19,136,8,0.18) 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "800",
            color: "#222",
            marginBottom: "15px",
            textTransform: "uppercase",
          }}
        >
          🇮🇳 Campaign  With  Leaders 🇮🇳 
        </h2>

        <div
          style={{
            width: "160px",
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
            maxWidth: "850px",
            margin: "0 auto 55px",
            lineHeight: "1.7",
            fontWeight: "500",
          }}
        >
          Campaign With Leaders is a national political consultancy specializing in election campaign management, political strategy, public leadership development, and legal–organizational advisory. We support leaders, candidates, NGOs, and institutions with structured, research-driven and technology-enabled solutions to build credibility, strengthen public engagement, and drive impactful results.

Our expertise spans campaign planning, voter data analytics, war-room operations, digital media, PR & communication, personal branding, reputation management, governance advisory, and compliance services including NGO formation, ECI registrations, financial certifications and policy support.

With experienced strategists, media specialists, legal advisors, and on-ground teams, we deliver end-to-end guidance—from booth-level execution to national campaign strategy—empowering leaders to win trust, influence communities and lead with vision.

We build campaigns with purpose—powered by research, communication, and leadership.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Our Expertise",
              desc: "We work with political leaders, public representatives, NGOs and corporates across India, offering legally aligned and operational solutions.",
            },
            {
              title: "Strategic Approach",
              desc: "Focused on transparency, accuracy and professional execution for sustainable, result-driven success.",
            },
            {
              title: "End-to-End Support",
              desc: "From documentation and compliance to campaign planning and public outreach — complete 360° support.",
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

        <p
          style={{
            marginTop: "50px",
            fontWeight: "700",
            fontSize: "20px",
            color: "#111",
          }}
        >
          🇮🇳 “Empower. परिवर्तन. Victory.” 🇮🇳  
        </p>
      </div>
    </section>
  );
}
