import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../protocol.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className="navbar"
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "12px 0",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        zIndex: 50
      }}
    >
      <div 
        className="container"
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px"
        }}
      >

        {/* Logo + Brand */}
        <Link 
          to="/" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "12px", 
            textDecoration: "none" 
          }}
        >
          <img 
            src={logo} 
            alt="Protocol Expert logo"
            style={{
              width: "80px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #ddd",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
            }}
          />
          <span 
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#222",
              letterSpacing: "0.5px"
            }}
          >
            Campaign With Leaders
          </span>
        </Link>

        {/* Hamburger icon (Mobile only) */}
        <div 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>

        {/* Navigation Menu */}
        <nav className={isOpen ? "nav-menu open" : "nav-menu"}>
          <ul>
            {[
              {label: "Home", path: "/"},
              {label: "About Us", path:"/about"},
              {label: "Services", path: "/services"},
              {label: "Gallery", path: "/gallery"},
              {label: "Why Choose Us", path: "/whychooseus"},
              {label: "Blog", path: "/blog"},  
              {label: "Vission/Mission", path:"/vission"},
            ].map((item) => (
              <li key={item.label} onClick={() => setIsOpen(false)}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}

            <li onClick={() => setIsOpen(false)}>
              <Link className="contact-btn" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
