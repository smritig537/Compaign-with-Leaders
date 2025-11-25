import React from 'react'
import { Link } from 'react-router-dom'
import logo from'../assets/political Logo.jpeg'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex', gap:'40px', flexWrap:'wrap', justifyContent:'space-between'}}>
        <div style={{maxWidth: '360px'}}>
           <img 
                      src={logo} 
                      alt="Protocol Expert logo"
                      style={{
                        width: "52px",
                        height: "52px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "2px solid #ddd",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
                      }}
                    />
          <p style={{color:'#cfe3ff', marginBottom:12}}>Campaign with Leaders provides consultancy for political parties, NGOs and organisations — registration, campaign management and legal-compliance services.</p>
          <p style={{color:'#cfe3ff'}}>Phone: +91-7599518683</p>
          <p style={{color:'#cfe3ff'}}>Email: campaignwithleaders@gmail.com</p>
        </div>

        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Address</h4>
          <p style={{color:'#cfe3ff'}}>Delhi, India-110001</p>
        </div>
      </div>
    </footer>
  )
}
