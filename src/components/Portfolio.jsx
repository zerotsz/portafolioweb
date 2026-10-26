import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';

// Importación de tus imágenes locales actualizadas desde src/assets/
import imgSenati from '../assets/senati.png';
import imgEcommerce from '../assets/ecommerce.png';
import imgRestaurante from '../assets/restaurante.png';
import imgFitCoach from '../assets/fitcoach.png';
import imgOcr from '../assets/ocr.png';
import imgEcolim from '../assets/ecolim.png';
import imgParksense from '../assets/parksense.png';

export default function Portfolio() {
  const [filter, setFilter] = useState('TODOS');

  // Fallback SVG por seguridad si falla alguna imagen
  const getFallbackImage = (title) => {
    const encodedTitle = encodeURIComponent(title);
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%23111925"/><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23111925;stop-opacity:1" /><stop offset="100%" style="stop-color:%231a2638;stop-opacity:1" /></linearGradient></defs><rect width="800" height="400" fill="url(%23grad)"/><path d="M0 0L800 400M800 0L0 400" stroke="%234DE6A8" stroke-opacity="0.05" stroke-width="2"/><circle cx="400" cy="200" r="120" stroke="%234DE6A8" stroke-opacity="0.15" fill="none" stroke-width="2"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%234DE6A8" font-family="sans-serif" font-weight="bold" font-size="22">${encodedTitle}</text></svg>`;
  };

  const projects = [
    {
      id: 1,
      title: "Sistema de Mantenimiento de Alumnos - SENATI",
      category: "Full Stack",
      badge: "SENATI / Desplegado",
      description: "Aplicación web para la gestión de matrículas, directorio de alumnos y control dinámico de asistencia.",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Vercel"],
      image: imgSenati,
      demoUrl: "https://app-escuela-hazel.vercel.app/",
      githubUrl: "https://github.com/Dgirto/appMantenimientoAlumnos.git"
    },
    {
      id: 2,
      title: "E-Commerce de Ropa (BT)",
      category: "Frontend",
      badge: "Vercel Live",
      description: "Tienda virtual interactiva para la comercialización de indumentaria y moda con catálogo dinámico y filtrado.",
      tags: ["React", "Vite", "JavaScript", "CSS3 / UI Moderno"],
      image: imgEcommerce,
      demoUrl: "https://ecommerceropa-bt.vercel.app/",
      githubUrl: "https://github.com/zerotsz"
    },
    {
      id: 3,
      title: "Plataforma de Restaurante - Don Pedrito",
      category: "Frontend",
      badge: "Vercel Live",
      description: "Plataforma digital gastronómica con menú interactivo, carta de productos y reservas de clientes.",
      tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      image: imgRestaurante,
      demoUrl: "https://restaurante-two-theta.vercel.app/",
      githubUrl: "https://github.com/zerotsz"
    },
    {
      id: 4,
      title: "FitCoach - Plataforma de Asesoría Fitness",
      category: "Full Stack",
      badge: "Vercel Live",
      description: "Plataforma web de asesoramiento deportivo y nutricional con seguimiento de rutinas y componentes modulares.",
      tags: ["Angular", "TypeScript", "SCSS", "Arquitectura Clean"],
      image: imgFitCoach,
      demoUrl: "https://fitcoachh-eight.vercel.app/",
      githubUrl: "https://github.com/zerotsz"
    },
    {
      id: 5,
      title: "ECOLIM - Gestión de Residuos e Inventarios",
      category: "Full Stack",
      badge: "Mobile App",
      description: "Aplicación móvil Android para el seguimiento de inventarios y control de residuos con autenticación biométrica.",
      tags: ["Java", "Android Studio", "SQLite", "Biometrics"],
      image: imgEcolim,
      demoUrl: "#",
      githubUrl: "https://github.com/DanielaMendoza4/appEcolim.git"
    },
    {
      id: 6,
      title: "PARKSENSE - Sistema de Parqueo Inteligente",
      category: "Backend",
      badge: "IoT & Simulación",
      description: "Controlador de estacionamiento simulado en Tinkercad con sensores ultrasónicos de distancia, servobarreras y pantalla LCD.",
      tags: ["C++", "Arduino", "Tinkercad", "Sensores IoT"],
      image: imgParksense,
      demoUrl: "https://www.tinkercad.com/things/dKMEk9EIb7G-parksense-sistema-de-parqueo-inteligente/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard&sharecode=wDwtgyiQI_50IxjAuVlBwgyC6WhaFxStDEK66Z0GchU",
      githubUrl: "https://github.com/zerotsz"
    },
    {
      id: 7,
      title: "Reconocimiento de Placas Vehiculares (OCR)",
      category: "Backend",
      badge: "IoT & Visión",
      description: "Sistema automatizado con visión artificial para detección y registro en tiempo real de matrículas vehiculares hacia Excel.",
      tags: ["Python", "OpenCV", "Tesseract OCR", "Excel"],
      image: imgOcr,
      demoUrl: "#",
      githubUrl: "https://github.com/zerotsz"
    }
  ];

  const categories = ['TODOS', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'TODOS'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '6rem 5%', maxWidth: '1300px', margin: '0 auto' }}>
      <h2 className="section-title">PROYECTOS DESTACADOS</h2>
      <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
        Soluciones web, sistemas integrados e IoT
      </p>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', cursor: 'pointer' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Proyectos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="card-glass" 
            style={{ 
              background: '#111925', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
          >
            <div>
              {/* Contenedor de Imagen */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden', backgroundColor: '#0B1019' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease' 
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = getFallbackImage(project.title);
                  }}
                />
                <span style={{ 
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(11, 25, 37, 0.85)', 
                  color: '#4DE6A8', 
                  border: '1px solid #4DE6A8',
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '20px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600,
                  backdropFilter: 'blur(4px)'
                }}>
                  {project.badge}
                </span>
              </div>

              {/* Contenido de la Tarjeta */}
              <div style={{ padding: '1.5rem 1.5rem 0' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#F8FAFC', marginBottom: '0.75rem', fontWeight: 600, lineHeight: '1.4' }}>
                  {project.title}
                </h3>

                <p style={{ color: '#A3AAB7', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        fontSize: '0.75rem', 
                        background: 'rgba(255, 255, 255, 0.05)', 
                        color: '#F8FAFC', 
                        padding: '0.25rem 0.6rem', 
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div style={{ padding: '0 1.5rem 1.5rem', display: 'flex', gap: '1rem' }}>
              <a 
                href={project.demoUrl} 
                target={project.demoUrl !== '#' ? "_blank" : "_self"} 
                rel="noreferrer" 
                className="btn-primary" 
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                onClick={(e) => {
                  if (project.demoUrl === '#') {
                    e.preventDefault();
                    alert(`Demostración de "${project.title}" disponible en entorno local / repositorio.`);
                  }
                }}
              >
                <ExternalLink size={16} /> Ver Proyecto
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary" 
                style={{ padding: '0.6rem', justifyContent: 'center', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                title="Ver Código"
              >
                <Code size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}