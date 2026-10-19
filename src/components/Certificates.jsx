import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Database Design - Español",
      issuer: "Cisco Networking Academy / Oracle Academy",
      sede: "SENATI",
      type: "CERTIFICADO OFICIAL",
      date: "Formación Profesional",
      description: "Diseño de bases de données relacionales, modelado entidad-relación y normalización.",
      driveUrl: "https://drive.google.com/file/d/15yzQYbrIp0FZM7RNs3xQlQ2IgKvriEmh/view?usp=sharing"
    },
    {
      id: 2,
      title: "Database Programming with SQL - Español",
      issuer: "Cisco Networking Academy / Oracle Academy",
      sede: "SENATI",
      type: "CERTIFICADO OFICIAL",
      date: "Formación Profesional",
      description: "Programación avanzada en bases de datos relacionales mediante consultas SQL y PL/SQL.",
      driveUrl: "https://drive.google.com/file/d/16RBgBXO1I-dxVqkm9uCzMwX3lM__FSVn/view?usp=sharing"
    },
    {
      id: 3,
      title: "Java Foundations",
      issuer: "Oracle Academy / Cisco Networking Academy",
      sede: "SENATI",
      type: "CERTIFICADO OFICIAL",
      date: "Formación Profesional",
      description: "Fundamentos esenciales de programación orientada a objetos utilizando el lenguaje Java.",
      driveUrl: "https://drive.google.com/file/d/17-8Kq0o_KVGTyQd_IW9T-UcBUypzTQb6/view?usp=sharing"
    },
    {
      id: 4,
      title: "Java Fundamentals - Español",
      issuer: "Cisco Networking Academy",
      sede: "SENATI",
      type: "CERTIFICADO OFICIAL",
      date: "Formación Profesional",
      description: "Introducción detallada a la lógica de programación y estructuras con Java.",
      driveUrl: "https://drive.google.com/file/d/1UTxxqoE3YqHHl1rTdP2HahSRHPemVPZi/view?usp=sharing"
    },
    {
      id: 5,
      title: "Conceptos Básicos de Hardware de Computadora",
      issuer: "Cisco Networking Academy",
      sede: "SENATI - San Martín de Porres-Lima",
      type: "CURSO OFICIAL",
      date: "20 Sep, 2024",
      description: "Conceptos básicos de hardware de computadora y componentes de PCs y dispositivos móviles.",
      driveUrl: "https://drive.google.com/drive/folders/1CVE_xyGv8cvQjPqZUeVdwvW8Yt4MTZQU?hl=es"
    },
    {
      id: 6,
      title: "Introducción a Ciberseguridad",
      issuer: "Cisco Networking Academy",
      sede: "SENATI - San Martín de Porres-Lima",
      type: "CURSO OFICIAL",
      date: "17 Ago, 2024",
      description: "Fundamentos y principios esenciales de ciberseguridad para la protección de sistemas e información.",
      driveUrl: "https://drive.google.com/drive/folders/1T_mHCbczYpmZI3paE7X4RK4efka5Nqve?hl=es"
    },
    {
      id: 7,
      title: "Introducción al Internet de las Cosas y Transformación Digital",
      issuer: "Cisco Networking Academy",
      sede: "SENATI - San Martín de Porres-Lima",
      type: "CURSO OFICIAL",
      date: "05 Ago, 2024",
      description: "Panorama general del Internet de las Cosas (IoT) y su impacto en la transformación digital.",
      driveUrl: "https://drive.google.com/drive/folders/1Qojs_2gJ5N0l2HdOoDWkQ2Ss-SjxPyVx?hl=es"
    }
  ];

  return (
    <section id="certificates" style={{ padding: '6rem 5%', maxWidth: '1300px', margin: '0 auto' }}>
      <h2 className="section-title">CERTIFICACIONES</h2>
      <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
        Credenciales oficiales y formación técnica especializada
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="card-glass" 
            style={{ 
              padding: '2rem', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: '#111925',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.6rem', background: 'rgba(77, 230, 168, 0.1)', borderRadius: '8px', color: '#4DE6A8' }}>
                  <Award size={24} />
                </div>
                <span style={{ 
                  backgroundColor: 'rgba(77, 230, 168, 0.15)', 
                  color: '#4DE6A8', 
                  border: '1px solid rgba(77, 230, 168, 0.3)',
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '20px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600
                }}>
                  {cert.type}
                </span>
              </div>

              <h3 style={{ fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '0.5rem', fontWeight: 600, lineHeight: '1.4' }}>
                {cert.title}
              </h3>

              <p style={{ color: '#4DE6A8', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                {cert.issuer}
              </p>
              
              <p style={{ color: '#A3AAB7', fontSize: '0.8rem', marginBottom: '1rem' }}>
                {cert.sede}
              </p>

              <p style={{ color: '#A3AAB7', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                {cert.description}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#A3AAB7', fontSize: '0.8rem', marginBottom: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                <Calendar size={14} color="#4DE6A8" />
                <span>{cert.date}</span>
              </div>

              <a 
                href={cert.driveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', padding: '0.6rem 1rem', fontSize: '0.85rem', gap: '0.5rem', textDecoration: 'none', display: 'flex' }}
              >
                Ver Credencial <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}