import React from 'react'
import ServiceCard from '../components/ServiceCard'
import services from '../data/services.json'

export default function Services(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map(s => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </div>
    </section>
  )
}
