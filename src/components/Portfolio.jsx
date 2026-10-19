import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('TODOS');

  const projects = [
    {
      id: 1,
      title: "Sistema de Asistencia y Matrícula - SENATI",
      category: "Full Stack",
      badge: "Desplegado",
      description: "Aplicación web completa para la gestión de matrículas, directorio de alumnos y control dinámico de asistencia.",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Vercel"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://app-escuela-hazel.vercel.app/",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "Plataforma de Asesoría Fitness - FitCoach",
      category: "Frontend",
      badge: "Codaini",
      description: "Diseño y desarrollo frontend modular e interactivo para la plataforma web de asesoramiento deportivo y nutricional.",
      tags: ["Angular", "TypeScript", "SCSS", "Figma"],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Reconocimiento de Placas Vehiculares (OCR)",
      category: "Backend",
      badge: "IoT & Visión",
      description: "Sistema automatizado con visión artificial para detección y registro en tiempo real de placas vehiculares hacia Excel.",
      tags: ["Python", "OpenCV", "Tesseract OCR", "Excel"],
      image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      title: "ECOLIM - Gestión de Residuos e Inventarios",
      category: "Full Stack",
      badge: "Mobile App",
      description: "Aplicación móvil Android desarrollada para el seguimiento de inventarios y control de residuos con biometría integrada.",
      tags: ["Java", "Android Studio", "SQLite", "Biometrics"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      title: "ParkSense - Sistema Inteligente de Estacionamiento",
      category: "Backend",
      badge: "IoT",
      description: "Sistema embebido con sensores ultrasónicos, barreras servomotorizadas y pantalla LCD en tiempo real.",
      tags: ["Arduino", "C++", "Sensores HC-SR04", "Servos"],
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      title: "Simulación 3D de Estructura Cerebral",
      category: "Frontend",
      badge: "Gráficos 3D",
      description: "Simulación procedural de partículas en 3D que renderiza una estructura cerebral en forma de galaxia mediante GPU shaders.",
      tags: ["Three.js", "GLSL Shaders", "JavaScript"],
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com"
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
        Soluciones web, sistemas integrados y desarrollo de software
      </p>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Proyectos con Imágenes */}
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
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Contenedor de la Imagen */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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

                {/* Tags de Tecnologías */}
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
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem' }}
                onClick={(e) => {
                  if (project.demoUrl === '#') {
                    e.preventDefault();
                    alert(`Demostración de "${project.title}" disponible en repositorio local / portafolio.`);
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
                style={{ padding: '0.6rem', justifyContent: 'center' }}
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