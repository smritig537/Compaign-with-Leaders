import React from "react";

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 30,
            alignItems: "start",
          }}
        >
          {/* Contact Form */}
          <div>
            <p>
              If you have any questions or need help with registration or
              campaign management, send us a message.
            </p>

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              style={{ marginTop: 18 }}
            >
              <input type="text" name="name" placeholder="Name" required />

              <input type="email" name="email" placeholder="Email" required />

              <input type="text" name="subject" placeholder="Subject" />

              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                required
              />

              <button className="btn" type="submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar Contact Info */}
          <aside
            style={{
              background: "#f6f9ff",
              padding: 18,
              borderRadius: 8,
            }}
          >
            <h4 style={{ color: "#012970", marginBottom: 8 }}>Contact Info</h4>

            <p>Phone: +91-7599518683</p>
            <p>Email: campaignwithleaders@gmail.com</p>

            <p style={{ marginTop: 10 }}>
              Address: Delhi, India-110001
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
