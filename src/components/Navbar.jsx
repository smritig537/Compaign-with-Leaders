import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../protocol.css";

export default function Navbar() {
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

        {/* Logo + brand */}
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
            className="brand" 
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

        {/* Menu */}
        <nav>
          <ul 
            className="nav-menu"
            style={{
              listStyle: "none",
              display: "flex",
              gap: "28px",
              margin: 0,
              padding: 0,
              alignItems: "center"
            }}
          >
            {[
              {label: "Home", path: "/"},
               {label: "About Us", path:"/about"},
              {label: "Services", path: "/services"},
              {label: "Gallery", path: "/gallery"},
              {label: "Why Choose Us", path: "/whychooseus"},
              {label: "Blog", path: "/blog"},  
              {label:"Vission/Mission", path:"/vission"}
            ].map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    color: "#333",
                    fontWeight: "500",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                  onMouseLeave={(e) => (e.target.style.color = "#333")}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Link 
                to="/contact"
                style={{
                  background: "#007bff",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "0.3s"
                }}
                onMouseEnter={(e) => (e.target.style.background = "#0056d2")}
                onMouseLeave={(e) => (e.target.style.background = "#007bff")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
