import React from 'react';

export default function CtaSection() {
  return (
    <section style={{ padding: '4rem 5%' }}>
      <div 
        className="card-glass" 
        style={{ 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, #111925, rgba(77, 230, 168, 0.05))', 
          border: '1px solid #4DE6A8', 
          padding: '4rem 2rem' 
        }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
          CONSTRUYAMOS ALGO EXTRAORDINARIO.
        </h2>
        <p style={{ color: '#A3AAB7', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          ¿Tienes un proyecto de software en mente o necesitas optimizar tus sistemas existentes? Hablemos y llevemos tu idea al siguiente nivel.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-primary">
            INICIAR UN PROYECTO
          </a>
          <a href="#contact" className="btn-secondary">
            CONTÁCTAME
          </a>
        </div>
      </div>
    </section>
  );
}