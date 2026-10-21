import React from 'react';
import { Download, FolderGit2, Code2, Award, Briefcase } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Proyectos desarrollados', value: '15+' },
    { label: 'Soluciones web creadas', value: '10+' },
    { label: 'Años de experiencia', value: '2+' },
    { label: 'Habilidades dominadas', value: '12+' },
  ];

  return (
    <section id="about" style={{ padding: '5rem 5%', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 className="section-title">SOBRE MÍ</h2>
      <p className="section-subtitle">
        Perfil Profesional
      </p>

      {/* BLOQUE SUPERIOR */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2.5rem', 
        alignItems: 'center',
        marginBottom: '3.5rem'
      }}>
        
        {/* LADO IZQUIERDO: Pitch enfocado únicamente en Habilidades Clave */}
        <div style={{
          background: 'rgba(17, 25, 37, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '2.5rem',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
        }}>
          <p style={{ color: '#A3AAB7', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
            <strong style={{ color: '#F8FAFC' }}>Ingeniero de Software Full Stack</strong> con más de <strong style={{ color: '#4DE6A8' }}>2+ años de experiencia</strong>. Especializado en el diseño de <strong style={{ color: '#F8FAFC' }}>interfaces dinámicas e interactivas</strong>, construcción de <strong style={{ color: '#F8FAFC' }}>arquitecturas backend y APIs escalables</strong>, gestión optimizada de <strong style={{ color: '#F8FAFC' }}>bases de datos relacionales y no relacionales</strong>, y transformación de información mediante <strong style={{ color: '#4DE6A8' }}>análisis de datos y reportes</strong>.
          </p>
          
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="/cv.pdf" download className="btn-primary">
              <Download size={18} /> Descargar CV
            </a>
            <a href="#portfolio" className="btn-secondary">
              Ver Proyectos
            </a>
          </div>
        </div>

        {/* LADO DERECHO: Tu Foto */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '340px',
            height: '420px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '2px solid rgba(77, 230, 168, 0.8)',
            boxShadow: '0 0 35px rgba(77, 230, 168, 0.25)',
            backgroundColor: '#111925'
          }}>
            <img
              src="/images/yo.jpg"
              alt="Carlos Polín - Ingeniero de Software Full Stack"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
              }}
            />
          </div>
        </div>
      </div>

      {/* BLOQUE INFERIOR: Métricas */}
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center', 
              padding: '1.75rem 1.25rem',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'linear-gradient(145deg, rgba(17, 25, 37, 0.85), rgba(77, 230, 168, 0.04))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <h3 style={{ fontSize: '2.25rem', color: '#4DE6A8', marginBottom: '0.25rem', fontWeight: 700 }}>
              {stat.value}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#A3AAB7', fontWeight: 500, lineHeight: '1.4' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}