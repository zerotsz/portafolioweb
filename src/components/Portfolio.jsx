import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

// Importación exacta de tus imágenes locales desde src/assets/
import imgSenati from '../assets/senati.png';
import imgEcommerce from '../assets/ecommerce.png';
import imgRestaurante from '../assets/restaurante.png';
import imgFitCoach from '../assets/fitcoach.png';
import imgOcr from '../assets/ocr.png';
import imgEcolim from '../assets/ecolim.png';

const misProyectos = [
  {
    titulo: 'Sistema de Asistencia y Matrícula - SENATI',
    badge: 'SENATI / Desplegado',
    descripcion: 'Aplicación web completa para la gestión de matrículas, directorio de alumnos y control dinámico de asistencia.',
    imagen: imgSenati,
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    link: 'https://github.com/zerotsz'
  },
  {
    titulo: 'E-Commerce de Ropa (BT)',
    badge: 'Vercel Live',
    descripcion: 'Tienda virtual interactiva para la comercialización de indumentaria y moda con catálogo dinámico, filtrado e interfaz moderna.',
    imagen: imgEcommerce,
    tags: ['React', 'Vite', 'JavaScript', 'CSS3 / UI Moderno'],
    link: 'https://github.com/zerotsz'
  },
  {
    titulo: 'Plataforma de Restaurante - Don Pedrito',
    badge: 'Vercel Live',
    descripcion: 'Plataforma digital para el sector gastronómico. Permite explorar menús digitales, cartas interactivas y reservas de clientes.',
    imagen: imgRestaurante,
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    link: 'https://github.com/zerotsz'
  },
  {
    titulo: 'FitCoach - Plataforma de Asesoría Fitness',
    badge: 'Vercel Live',
    descripcion: 'Aplicación web orientada al seguimiento deportivo y planes de entrenamiento personalizados para gimnasios y entrenadores.',
    imagen: imgFitCoach,
    tags: ['Angular', 'TypeScript', 'SCSS', 'Laravel API'],
    link: 'https://github.com/zerotsz'
  },
  {
    titulo: 'Reconocimiento de Placas Vehiculares (OCR)',
    badge: 'IoT & Visión',
    descripcion: 'Sistema inteligente de lectura y registro de matrículas con OpenCV y EasyOCR integrado a hojas de reporte corporativas.',
    imagen: imgOcr,
    tags: ['Python', 'OpenCV', 'EasyOCR', 'openpyxl'],
    link: 'https://github.com/zerotsz'
  },
  {
    titulo: 'ECOLIM - Gestión de Residuos e Inventarios',
    badge: 'Mobile App',
    descripcion: 'Aplicación nativa Android para control de inventarios y tratamiento de residuos con autenticación biométrica y exportación CSV.',
    imagen: imgEcolim,
    tags: ['Kotlin', 'Java', 'SQLite', 'Biometric API'],
    link: 'https://github.com/zerotsz'
  }
];

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: '6rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>PROYECTOS</h2>
      <p style={{ color: '#4DE6A8', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', marginTop: '0.4rem', marginBottom: '3.5rem', textTransform: 'uppercase' }}>
        MIS TRABAJOS Y DESARROLLOS DESTACADOS
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {misProyectos.map((p, idx) => (
          <div key={idx} style={{
            backgroundColor: '#0F1622',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.3s ease'
          }}>
            
            {/* CONTENEDOR DE LA IMAGEN LOCAL */}
            <div style={{ width: '100%', height: '180px', overflow: 'hidden', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', backgroundColor: '#080C14' }}>
              <img 
                src={p.imagen} 
                alt={p.titulo} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.3s ease' }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>

            {/* CONTENIDO DE LA TARJETA */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(77, 230, 168, 0.1)',
                  color: '#4DE6A8',
                  border: '1px solid rgba(77, 230, 168, 0.2)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginBottom: '1.2rem'
                }}>
                  {p.badge}
                </span>

                <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {p.titulo}
                </h3>

                <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {p.descripcion}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {p.tags.map((t, i) => (
                    <span key={i} style={{
                      backgroundColor: '#0A0F17',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#CBD5E1',
                      fontSize: '0.75rem',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '6px',
                      fontWeight: 600
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTONES DE ACCIÓN */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#4DE6A8',
                    color: '#0A0F17',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none'
                  }}
                >
                  <ExternalLink size={16} /> Ver Proyecto
                </a>
                <a
                  href="https://github.com/zerotsz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0A0F17',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <Code size={16} />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}