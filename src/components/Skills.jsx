import React, { useState } from 'react';
import { skillsData } from '../data/skills';

export default function Skills() {
  const [filter, setFilter] = useState('TODOS');

  const categories = ['TODOS', 'Frontend', 'Backend', 'Datos'];

  const filteredSkills = filter === 'TODOS'
    ? skillsData
    : skillsData.filter(s => s.category === filter);

  return (
    <section id="skills">
      <h2 className="section-title">TECNOLOGÍAS Y HABILIDADES</h2>
      <p className="section-subtitle">Herramientas que utilizo para desarrollar software</p>

      {/* Botones de filtro */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tarjetas con logos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
        {filteredSkills.map((skill, index) => (
          <div key={index} className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
            <img 
              src={skill.icon} 
              alt={skill.name} 
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
              onError={(e) => {
                // Si la imagen falla por alguna razón, se oculta limpiamente
                e.target.style.display = 'none';
              }}
            />
            <div>
              <span style={{ fontWeight: 600, fontSize: '1rem', display: 'block', color: '#F8FAFC' }}>
                {skill.name}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#A3AAB7' }}>
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}