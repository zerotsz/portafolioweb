import React from 'react';

export default function Process() {
  const steps = [
    { number: '01', title: 'DISCOVER', desc: 'Comprender el problema, los objetivos y las necesidades del usuario.' },
    { number: '02', title: 'STRATEGIZE', desc: 'Definir la estructura, la estrategia y las prioridades.' },
    { number: '03', title: 'DESIGN & BUILD', desc: 'Diseñar interfaces y desarrollar experiencias interactivas.' },
    { number: '04', title: 'LAUNCH & IMPROVE', desc: 'Probar, publicar y mejorar el producto.' },
  ];

  return (
    <section id="process">
      <h2 className="section-title">MY PROCESS</h2>
      <p className="section-subtitle">Metodología estructurada de trabajo</p>

      <div className="grid-3">
        {steps.map((step, index) => (
          <div key={index} className="card-glass">
            <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#4DE6A8', display: 'block', marginBottom: '1rem' }}>
              {step.number}
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{step.title}</h3>
            <p style={{ color: '#A3AAB7', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}