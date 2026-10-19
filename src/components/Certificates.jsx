import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Conceptos Básicos de Hardware de Computadora",
      issuer: "Cisco Networking Academy",
      sede: "SENATI - San Martín de Porres-Lima",
      instructor: "Guillermo Alberto Góngora Chu",
      type: "CURSO OFICIAL",
      date: "20 Sep, 2024",
      certId: "aa66c7fe-9c59-454b-b017-a63f4ba29e32",
      description: "Conceptos básicos de hardware de computadora y componentes de PCs y dispositivos móviles.",
      driveUrl: "https://drive.google.com/drive/folders/1CVE_xyGv8cvQjPqZUeVdwvW8Yt4MTZQU?hl=es"
    },
    {
      id: 2,
      title: "Introducción a Ciberseguridad",
      issuer: "Cisco Networking Academy",
      sede: "SENATI - San Martín de Porres-Lima",
      instructor: "Guillermo Alberto Góngora Chu",
      type: "CURSO OFICIAL",
      date: "17 Ago, 2024",
      certId: "b1c4d3e1-f7be-494c-aa3c-e82064624e99",
      description: "Fundamentos y principios esenciales de ciberseguridad para la protección de sistemas e información.",
      driveUrl: "https://drive.google.com/drive/folders/1T_mHCbczYpmZI3paE7X4RK4efka5Nqve?hl=es"
    },
    {
      id: 3,
      title: "Introducción al Internet de las Cosas y Transformación Digital",
      issuer: "Cisco Networking Academy",
      sede: "SENATI - San Martín de Porres-Lima",
      instructor: "Guillermo Alberto Góngora Chu",
      type: "CURSO OFICIAL",
      date: "05 Ago, 2024",
      certId: "5dad8e7d-032c-44dc-8b3a-e4c48b24601c",
      description: "Panorama general del Internet de las Cosas (IoT) y su impacto en la transformación digital.",
      driveUrl: "https://drive.google.com/drive/folders/1Qojs_2gJ5N0l2HdOoDWkQ2Ss-SjxPyVx?hl=es"
    }
  ];

  return (
    <section id="certificates" style={{ padding: '6rem 5%', maxWidth: '1300px', margin: '0 auto' }}>
      <h2 className="section-title">CERTIFICACIONES</h2>
      <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
        Credenciales oficiales validadas por Cisco Networking Academy y SENATI
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
                <span>Finalizado: {cert.date}</span>
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