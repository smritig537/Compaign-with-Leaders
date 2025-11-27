import React from "react";
// import img1 from "../assets/placeholder.jpg";
// import img2 from "../assets/placeholder.jpg";
// import img3 from "../assets/placeholder.jpg";
// import img4 from "../assets/placeholder.jpg";

// const images = [img1, img2, img3, img4];

export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {/* {images.map((src, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <img src={src} alt={`gallery-${i}`} style={{ width: "100%" }} />
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
