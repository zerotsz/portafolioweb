import React from 'react';
import { Download } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Proyectos desarrollados', value: '15+' },
    { label: 'Soluciones web creadas', value: '10+' },
    { label: 'Años de experiencia', value: '2+' },
    { label: 'Tecnologías dominadas', value: '12+' },
  ];

  return (
    <section id="about" style={{ padding: '6rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="section-title">SOBRE MÍ</h2>
      <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
        Transformando requerimientos en soluciones web escalables y eficientes.
      </p>

      {/* BLOQUE SUPERIOR: Texto e información a la Izquierda | Foto a la Derecha */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '3.5rem', 
        alignItems: 'center',
        marginBottom: '4rem'
      }}>
        {/* LADO IZQUIERDO: Descripción profesional */}
        <div>
          <p style={{ color: '#A3AAB7', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Como <strong style={{ color: '#F8FAFC' }}>Ingeniero de Software Full Stack</strong>, me especializo en el diseño, desarrollo e implementación de aplicaciones y soluciones web completas. Mi enfoque abarca desde la creación de interfaces de usuario modernas y responsivas con <span style={{ color: '#4DE6A8' }}>React y Angular</span>, hasta la arquitectura e integración de servidores robustos con <span style={{ color: '#4DE6A8' }}>Node.js, NestJS, Java y PHP</span>.
          </p>
          <p style={{ color: '#A3AAB7', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
            Me enfoco en construir sistemas optimizados, mantenibles y seguros, respaldados por una sólida gestión de bases de datos relacionales y no relacionales (<span style={{ color: '#4DE6A8' }}>SQL y MongoDB</span>), junto con el análisis de datos para optimizar procesos y la toma de decisiones.
          </p>
          
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="/cv.pdf" download className="btn-primary">
              <Download size={18} /> Descargar CV
            </a>
            <a href="#projects" className="btn-secondary">
              Ver Proyectos
            </a>
          </div>
        </div>

        {/* LADO DERECHO: Tu Foto de Perfil */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            width: '320px',
            height: '380px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid #4DE6A8',
            boxShadow: '0 0 30px rgba(77, 230, 168, 0.25)',
            backgroundColor: '#111925'
          }}>
            <img
              src="/images/yo.jpg"
              alt="Carlos Polín - Ingeniero de Software Full Stack"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
              }}
            />
          </div>
        </div>
      </div>

      {/* BLOQUE INFERIOR: Las 4 Tarjetas organizadas horizontalmente abajo */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="card-glass" 
            style={{ 
              textAlign: 'center', 
              padding: '2rem 1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'linear-gradient(145deg, #111925, rgba(77, 230, 168, 0.03))'
            }}
          >
            <h3 style={{ fontSize: '2.5rem', color: '#4DE6A8', marginBottom: '0.5rem', fontWeight: 700 }}>
              {stat.value}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#A3AAB7', fontWeight: 500 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}