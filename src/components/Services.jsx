import React from 'react';
import { Layout, Server, Database, Code2, BarChart3, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout size={32} color="#4DE6A8" />,
      title: "Desarrollo Frontend",
      description: "Construcción de interfaces web modernas, dinámicas e interactivas utilizando componentes reutilizables y responsive design.",
      highlights: [
        "React y Angular",
        "HTML5, CSS3 y Bootstrap",
        "Diseño web adaptativo (Responsive)"
      ]
    },
    {
      icon: <Server size={32} color="#4DE6A8" />,
      title: "Desarrollo Backend & APIs",
      description: "Arquitectura e implementación de lógica del servidor robusta, eficiente y escalable para aplicaciones web.",
      highlights: [
        "Node.js, Express y NestJS",
        "Desarrollo en TypeScript, Java y PHP",
        "Creación e integración de APIs RESTful"
      ]
    },
    {
      icon: <Database size={32} color="#4DE6A8" />,
      title: "Gestión de Bases de Datos",
      description: "Diseño, modelado y optimización de bases de datos relacionales y no relacionales para garantizar la integridad y velocidad de los datos.",
      highlights: [
        "Bases de Datos Relacionales (SQL)",
        "Bases de Datos No Relacionales (MongoDB)",
        "Consultas optimizadas y modelado"
      ]
    },
    {
      icon: <Code2 size={32} color="#4DE6A8" />,
      title: "Desarrollo Full Stack Integrado",
      description: "Soluciones de software completas desde la concepción de la idea y el cliente (frontend) hasta el servidor y base de datos (backend).",
      highlights: [
        "Sistemas web integrados a medida",
        "Arquitectura de software escalable",
        "Mantenimiento y refactorización"
      ]
    },
    {
      icon: <BarChart3 size={32} color="#4DE6A8" />,
      title: "Análisis de Datos & Reportes",
      description: "Transformación de datos en información clave mediante cuadros de mando e informes técnicos para la toma de decisiones.",
      highlights: [
        "Dashboards interactivos en Power BI",
        "Gestión y análisis con Excel avanzado",
        "Organización y limpieza de datos"
      ]
    },
    {
      icon: <ShieldCheck size={32} color="#4DE6A8" />,
      title: "Ciberseguridad Básica & Buenas Prácticas",
      description: "Aplicación de principios de seguridad en el desarrollo web para proteger datos sensibles y prevenir vulnerabilidades comunes.",
      highlights: [
        "Autenticación y control de acceso",
        "Validación segura de entradas y datos",
        "Buenas prácticas de código limpio"
      ]
    }
  ];

  return (
    <section id="services" style={{ padding: '6rem 5%', maxWidth: '1300px', margin: '0 auto' }}>
      <h2 className="section-title">SERVICIOS PROFESIONALES</h2>
      <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
        Soluciones de software integrales adaptadas a las necesidades de cada proyecto
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        {services.map((service, index) => (
          <div 
            key={index} 
            className="card-glass" 
            style={{ 
              padding: '2rem', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: '#111925',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
          >
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#F8FAFC', marginBottom: '0.75rem', fontWeight: 600 }}>
                {service.title}
              </h3>
              <p style={{ color: '#A3AAB7', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {service.description}
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
              {service.highlights.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#A3AAB7' }}>
                  <CheckCircle2 size={16} color="#4DE6A8" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}