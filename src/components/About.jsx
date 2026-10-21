import React, { useState } from 'react';
import { Download, FolderGit2, Globe, Briefcase, Cpu, X, Sparkles } from 'lucide-react';

export default function About() {
  const [showModal, setShowModal] = useState(false);

  const stats = [
    { 
      label: 'Proyectos desarrollados', 
      value: '15+', 
      icon: <FolderGit2 size={20} /> 
    },
    { 
      label: 'Soluciones web creadas', 
      value: '10+', 
      icon: <Globe size={20} /> 
    },
    { 
      label: 'Años de experiencia', 
      value: '2+', 
      icon: <Briefcase size={20} /> 
    },
    { 
      label: 'Habilidades dominadas', 
      value: '12+', 
      icon: <Cpu size={20} /> 
    },
  ];

  return (
    <section id="about" style={{ 
      paddingTop: '8rem', 
      paddingBottom: '5rem',
      paddingLeft: '5%',
      paddingRight: '5%',
      maxWidth: '1280px', 
      margin: '0 auto',
      position: 'relative'
    }}>
      <style>{`
        .stat-card-perfect {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card-perfect:hover {
          transform: translateY(-4px);
          border-color: rgba(77, 230, 168, 0.4) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 12px rgba(77, 230, 168, 0.15);
        }
        .stat-card-perfect:hover .icon-box-perfect {
          background: rgba(77, 230, 168, 0.18) !important;
          border-color: rgba(77, 230, 168, 0.4) !important;
          color: #4DE6A8 !important;
        }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <h2 className="section-title">SOBRE MÍ</h2>
      <p className="section-subtitle">
        Perfil Profesional
      </p>

      {/* BLOQUE SUPERIOR: Pitch + Foto */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '3rem', 
        alignItems: 'stretch',
        marginBottom: '4.5rem' 
      }}>
        
        {/* LADO IZQUIERDO: Descripción Corta & Directa */}
        <div style={{
          background: 'rgba(17, 25, 37, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '2.5rem',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <p style={{ color: '#A3AAB7', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '2rem' }}>
            <strong style={{ color: '#F8FAFC' }}>Ingeniero de Software Full Stack</strong> con más de <strong style={{ color: '#4DE6A8' }}>2+ años de experiencia</strong>. Especializado en el diseño de <strong style={{ color: '#F8FAFC' }}>interfaces dinámicas e interactivas</strong>, construcción de <strong style={{ color: '#F8FAFC' }}>arquitecturas backend y APIs escalables</strong>, gestión optimizada de <strong style={{ color: '#F8FAFC' }}>bases de datos relacionales y no relacionales</strong>, y transformación de información mediante <strong style={{ color: '#4DE6A8' }}>análisis de datos y reportes</strong>.
          </p>
          
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            {/* BOTÓN QUE ABRE EL MODAL DE LA FRASE */}
            <button 
              onClick={() => setShowModal(true)} 
              className="btn-primary" 
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.92rem', cursor: 'pointer', border: 'none' }}
            >
              <Download size={18} /> Descargar CV
            </button>
            <a href="#portfolio" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.92rem' }}>
              Ver Proyectos
            </a>
          </div>
        </div>

        {/* LADO DERECHO: Foto de Perfil */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '320px',
            height: '380px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '2px solid rgba(77, 230, 168, 0.7)',
            boxShadow: '0 0 30px rgba(77, 230, 168, 0.2)',
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

      {/* BLOQUE INFERIOR: TARJETAS DE MÉTRICAS */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
        gap: '1.75rem' 
      }}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-card-perfect" 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center', 
              padding: '1.6rem 1.2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'linear-gradient(145deg, rgba(17, 25, 37, 0.85), rgba(11, 16, 25, 0.95))',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <div 
              className="icon-box-perfect"
              style={{ 
                color: '#4DE6A8', 
                backgroundColor: 'rgba(77, 230, 168, 0.08)',
                border: '1px solid rgba(77, 230, 168, 0.2)',
                borderRadius: '12px',
                padding: '0.65rem',
                marginBottom: '0.85rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'all 0.25s ease'
              }}
            >
              {stat.icon}
            </div>

            <h3 style={{ 
              fontSize: '2rem', 
              color: '#4DE6A8', 
              marginBottom: '0.3rem', 
              fontWeight: 800,
              lineHeight: '1.1'
            }}>
              {stat.value}
            </h3>

            <p style={{ 
              fontSize: '0.88rem', 
              color: '#A3AAB7', 
              fontWeight: 500, 
              lineHeight: '1.3',
              margin: 0
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL SOLO CON LA FRASE EXACTA Y BOTÓN X PARA SALIR */}
      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(5, 8, 15, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem'
          }}
          onClick={() => setShowModal(false)}
        >
          <div 
            style={{
              background: 'linear-gradient(145deg, rgba(17, 25, 37, 0.95), rgba(11, 16, 25, 0.98))',
              border: '1.5px solid rgba(77, 230, 168, 0.35)',
              borderRadius: '20px',
              padding: '3rem 2.5rem',
              maxWidth: '480px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(77, 230, 168, 0.15)',
              animation: 'modalFadeIn 0.25s ease-out forwards'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón X para Salir */}
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#A3AAB7',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#4DE6A8';
                e.currentTarget.style.borderColor = 'rgba(77, 230, 168, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#A3AAB7';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
              title="Cerrar"
            >
              <X size={18} />
            </button>

            {/* Ícono Cyber */}
            <div style={{
              display: 'inline-flex',
              padding: '0.75rem',
              borderRadius: '14px',
              backgroundColor: 'rgba(77, 230, 168, 0.08)',
              border: '1px solid rgba(77, 230, 168, 0.2)',
              color: '#4DE6A8',
              marginBottom: '1.5rem'
            }}>
              <Sparkles size={28} />
            </div>

            {/* Frase Célebre Solicitada */}
            <h3 style={{ 
              color: '#F8FAFC', 
              fontSize: '1.35rem', 
              fontWeight: 700, 
              lineHeight: '1.6',
              margin: 0
            }}>
              "¿Por qué descargar mi CV? Si puedes <span style={{ color: '#4DE6A8' }}>imaginar tu proyecto</span>, yo lo puedo <span style={{ color: '#4DE6A8' }}>programar</span>."
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}