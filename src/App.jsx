import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { X } from 'lucide-react';

import './styles/global.css';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onOpenShowreel={() => setShowreelOpen(true)} />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Process />
        <Experience />
        <Certificates />
        <Testimonials />
        
        {/* Tarjeta única directamente antes del Formulario de Contacto */}
        <CtaSection />
        
        <Contact />
      </main>


      {/* Modal de Demostración */}
      {showreelOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(11, 16, 25, 0.95)', backdropFilter: 'blur(8px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 3000, padding: '2rem'
        }}>
          <div className="card-glass" style={{ maxWidth: '800px', width: '100%', position: 'relative', background: '#111925', border: '1px solid #4DE6A8', textAlign: 'center', padding: '3rem' }}>
            <button onClick={() => setShowreelOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: '#F8FAFC', cursor: 'pointer' }}>
              <X size={24} />
            </button>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#4DE6A8' }}>Demostración (Demo)</h3>
            <p style={{ color: '#A3AAB7', marginBottom: '2rem' }}>Aquí puedes integrar tu enlace de video o reproductor cuando esté disponible.</p>
            <button className="btn-primary" onClick={() => setShowreelOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}