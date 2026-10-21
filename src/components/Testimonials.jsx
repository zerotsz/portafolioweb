import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Diego Aranda",
    role: "Lead Frontend Engineer - Codaini (FitCoach)",
    rating: 5,
    comment: "Carlos demostró una capacidad excepcional para desarrollar la interfaz de FitCoach. Su manejo modular en Angular, el uso de Signals y la fidelidad con los diseños de Figma permitieron entregar una plataforma fluida y de alto rendimiento."
  },
  {
    id: 2,
    name: "Pedro Gutiérrez",
    role: "Propietario - Restaurante Don Pedrito",
    rating: 5,
    comment: "Carlos transformó la experiencia de nuestros clientes creando una carta digital y sistema de reservas muy intuitivo. Su atención a la usabilidad móvil y velocidad de carga impactó positivamente en la atención de nuestro local."
  },
  {
    id: 3,
    name: "Lander Milla",
    role: "Tech Lead - Soluciones Tecnológicas Adash",
    rating: 5,
    comment: "Durante el desarrollo de la tienda virtual, Carlos destacó por su sólido criterio en arquitectura web, la integración limpia de componentes interactivos y la entrega de un software totalmente mantenible y de calidad."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonialsData || testimonialsData.length === 0) return null;

  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" style={{ padding: '5rem 5%', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 className="section-title" style={{ color: '#F8FAFC', fontWeight: 800, fontSize: '2rem', letterSpacing: '1px' }}>
        TESTIMONIALS
      </h2>
      <p className="section-subtitle" style={{ color: '#4DE6A8', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', marginBottom: '2.5rem', textTransform: 'uppercase' }}>
        OPINIONES Y DEMOSTRACIONES DE COLABORACIÓN
      </p>

      {/* Tarjeta idéntica a la captura original */}
      <div 
        className="card-glass" 
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center', 
          padding: '3rem 2.5rem',
          background: 'rgba(17, 25, 37, 0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Estrellas verde neón */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.35rem', marginBottom: '1.75rem' }}>
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} size={18} fill="#4DE6A8" color="#4DE6A8" />
          ))}
        </div>

        {/* Texto entrecomillado en cursiva */}
        <p style={{ 
          fontSize: '1.1rem', 
          fontStyle: 'italic', 
          color: '#F8FAFC', 
          lineHeight: '1.8', 
          marginBottom: '2rem',
          fontWeight: 400
        }}>
          "{current.comment}"
        </p>

        {/* Nombre y Cargo sin la etiqueta "(Ejemplo)" */}
        <h4 style={{ fontSize: '1.1rem', color: '#4DE6A8', marginBottom: '0.35rem', fontWeight: 700 }}>
          {current.name}
        </h4>
        <p style={{ fontSize: '0.85rem', color: '#A3AAB7', marginBottom: '2rem' }}>
          {current.role}
        </p>

        {/* Botones cuadrados de navegación */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
          <button 
            onClick={prevSlide} 
            className="btn-secondary" 
            style={{ 
              padding: '0.55rem', 
              borderRadius: '6px', 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#F8FAFC',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="btn-secondary" 
            style={{ 
              padding: '0.55rem', 
              borderRadius: '6px', 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#F8FAFC',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}