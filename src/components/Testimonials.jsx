import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonialsData || testimonialsData.length === 0) return null;

  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials">
      <h2 className="section-title">TESTIMONIALS</h2>
      <p className="section-subtitle">Opiniones y demostraciones de colaboración</p>

      <div className="card-glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} size={18} fill="#4DE6A8" color="#4DE6A8" />
          ))}
        </div>

        <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#F8FAFC', lineHeight: '1.8', marginBottom: '2rem' }}>
          "{current.comment}"
        </p>

        <h4 style={{ fontSize: '1.1rem', color: '#4DE6A8', marginBottom: '0.25rem' }}>{current.name}</h4>
        <p style={{ fontSize: '0.85rem', color: '#A3AAB7', marginBottom: '2rem' }}>{current.role}</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button onClick={prevSlide} className="btn-secondary" style={{ padding: '0.5rem' }}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="btn-secondary" style={{ padding: '0.5rem' }}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}