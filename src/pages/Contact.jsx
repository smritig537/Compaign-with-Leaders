import React from "react";

export default function Contact() {
  return (
    <section
      className="contact-section"
      style={{
        padding: "110px 20px",
        background:
          "linear-gradient(135deg, rgba(255,153,51,0.18) 0%, rgba(255,255,255,0.95) 50%, rgba(19,136,8,0.18) 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "800",
            textAlign: "center",
            textTransform: "uppercase",
            background: "linear-gradient(90deg,#FF671F,#000,#046A38)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Contact Us
        </h2>

        {/* Tricolor underline */}
        <div
          style={{
            width: "160px",
            height: "6px",
            background:
              "linear-gradient(to right, #FF671F 0%, #FFFFFF 50%, #046A38 100%)",
            margin: "18px auto 45px",
            borderRadius: "6px",
          }}
        ></div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "40px",
          }}
        >
          {/* Contact Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(10px)",
              padding: "35px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "18px",
                color: "#333",
                lineHeight: "1.6",
                fontWeight: "500",
              }}
            >
              Have a question or need assistance? Send us a message and our team will get back to you shortly.
            </p>

            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              {["name", "email", "subject"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  required
                  style={{
                    width: "100%",
                    padding: "14px",
                    margin: "10px 0",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    outline: "none",
                    transition: "0.3s",
                  }}
                />
              ))}

              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                required
                style={{
                  width: "100%",
                  padding: "14px",
                  margin: "10px 0",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "linear-gradient(45deg,#FF671F,#046A38)",
                  border: "none",
                  padding: "14px",
                  fontSize: "18px",
                  fontWeight: "700",
                  borderRadius: "10px",
                  color: "#fff",
                  marginTop: "10px",
                  cursor: "pointer",
                  transition: "0.35s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <aside
            style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(10px)",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              borderTop: "6px solid #FF671F",
              borderBottom: "6px solid #046A38",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "14px",
                color: "#012970",
              }}
            >
              Contact Details
            </h3>

            <p style={{ marginBottom: "10px", fontSize: "17px" }}>
              📞 +91-7599518683
            </p>
            <p style={{ marginBottom: "10px", fontSize: "17px" }}>
              ✉ campaignwithleaders@gmail.com
            </p>
            <p style={{ marginTop: "18px", fontSize: "17px" }}>📍 Delhi, India - 110001</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
