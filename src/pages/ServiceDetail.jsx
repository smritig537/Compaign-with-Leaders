import React from 'react'
import { useParams, Link } from 'react-router-dom'
import services from '../data/services.json'

export default function ServiceDetail(){
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if(!service){
    return (
      <section className="section">
        <div className="container">
          <h2>Service not found</h2>
          <p>We couldn't find that service.</p>
          <Link to="/services" className="btn">Back to services</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{service.title}</h2>
        <p style={{maxWidth:900, marginBottom:18}}>{service.content}</p>

        <div style={{marginTop:20}}>
          <Link to="/contact" className="btn">Contact Us about this service</Link>
        </div>
      </div>
    </section>
  )
}
