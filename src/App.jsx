import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Why from './pages/Why';
import VisionMission from './pages/VissionMission'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/services/:slug" element={<ServiceDetail/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
        <Route path="/whychooseus" element={<Why/>}/>
        <Route path='/vission' element={<VisionMission/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
