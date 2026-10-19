import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Desarrollador Frontend & Diseñador Web",
      company: "Codaini",
      period: "Presente",
      description: "Desarrollo y diseño de interfaz para una plataforma web especializada en asesoramiento fitness.",
      highlights: [
        "Diseño y maquetación de la interfaz web adaptada a la experiencia del usuario.",
        "Desarrollo frontend responsivo para la plataforma de asesoramiento fitness.",
        "Implementación de componentes dinámicos e integración con servicios web."
      ]
    },
    {
      title: "Desarrollador Backend",
      company: "Soluciones Tecnológicas Adash",
      period: "Febrero 2026 - Junio 2026",
      description: "Enfocado en la arquitectura backend, lógica de negocio e integración de servidores.",
      highlights: [
        "Desarrollo e integración de APIs RESTful y servicios web.",
        "Gestión, modelado y optimización de bases de datos.",
        "Implementación de lógica del servidor y mantenimiento del sistema."
      ]
    },
    {
      title: "Desarrollador Web Freelance",
      company: "Proyectos Independientes",
      period: "2024 - 2025",
      description: "Diseño y construcción de páginas y sistemas web a medida para diversos clientes y negocios.",
      highlights: [
        "Creación de páginas web responsivas y personalizadas.",
        "Mantenimiento, optimización y maquetación web con HTML, CSS, JavaScript y frameworks.",
        "Atención personalizada a clientes para el levantamiento de requerimientos."
      ]
    },
    {
      title: "Experiencia Polivalente en Servicios y Atención",
      company: "Diversos Sectores",
      period: "Trayectoria Previa",
      description: "Desarrollo de habilidades blandas clave como trabajo bajo presión, trabajo en equipo, resolución de problemas y enfoque al cliente.",
      highlights: [
        "Asesor de Ventas y Atención al Cliente en DecoHome.",
        "Bartender, Repostero, Cocinero y Mozo en el sector gastronómico.",
        "Alta capacidad de adaptación, comunicación asertiva y gestión del tiempo."
      ]
    }
  ];

  const education = [
    {
      title: "Ingeniería de Software",
      institution: "SENATI - Perú",
      period: "2024 - Presente",
      type: "Educación Superior"
    },
    {
      title: "Certificación en Power BI",
      institution: "Plataformas Online",
      period: "2025",
      type: "Certificación"
    },
    {
      title: "Certificación en Microsoft Excel",
      institution: "Plataformas Online",
      period: "2025",
      type: "Certificación"
    },
    {
      title: "Curso / Certificación en Ciberseguridad",
      institution: "Plataformas Online",
      period: "2024",
      type: "Curso"
    }
  ];

  return (
    <section id="experience" style={{ padding: '6rem 5%', maxWidth: '1300px', margin: '0 auto' }}>
      <h2 className="section-title">TRAYECTORIA Y FORMACIÓN</h2>
      <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
        Mi experiencia laboral y preparación académica
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3.5rem' }}>
        
        {/* COLUMNA DE EXPERIENCIA */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <Briefcase size={24} color="#4DE6A8" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFC' }}>Experiencia Laboral</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="card-glass" 
                style={{ 
                  padding: '1.75rem', 
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#111925' 
                }}
              >
                <span style={{ color: '#4DE6A8', fontSize: '0.8rem', fontWeight: 600 }}>{exp.period}</span>
                <h4 style={{ fontSize: '1.2rem', margin: '0.25rem 0', color: '#F8FAFC' }}>{exp.title}</h4>
                <p style={{ color: '#A3AAB7', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 500 }}>{exp.company}</p>
                <p style={{ color: '#A3AAB7', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>{exp.description}</p>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.highlights.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#A3AAB7' }}>
                      <CheckCircle2 size={16} color="#4DE6A8" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DE EDUCACIÓN Y CERTIFICACIONES */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <GraduationCap size={24} color="#4DE6A8" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFC' }}>Educación y Cursos</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className="card-glass" 
                style={{ 
                  padding: '1.5rem', 
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#111925',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div style={{ padding: '0.6rem', background: 'rgba(77, 230, 168, 0.1)', borderRadius: '8px', color: '#4DE6A8' }}>
                  <Award size={20} />
                </div>
                <div>
                  <span style={{ color: '#4DE6A8', fontSize: '0.8rem', fontWeight: 600 }}>{edu.period} • {edu.type}</span>
                  <h4 style={{ fontSize: '1.1rem', margin: '0.2rem 0', color: '#F8FAFC' }}>{edu.title}</h4>
                  <p style={{ color: '#A3AAB7', fontSize: '0.85rem' }}>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}