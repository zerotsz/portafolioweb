import React, { useEffect } from 'react';
import { X, ExternalLink, Code } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(11, 16, 25, 0.9)', backdropFilter: 'blur(8px)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 2000, padding: '2rem'
    }}>
      <div className="card-glass" style={{
        maxWidth: '800px', width: '100%', maxHeight: '90vh', overflowY: 'auto',
        position: 'relative', background: '#111925', border: '1px solid #4DE6A8'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: '#F8FAFC', cursor: 'pointer' }}>
          <X size={24} />
        </button>

        <span style={{ color: '#4DE6A8', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>{project.category}</span>
        <h2 style={{ fontSize: '2rem', margin: '0.5rem 0 1rem' }}>{project.title}</h2>
        <p style={{ color: '#A3AAB7', marginBottom: '1.5rem' }}>{project.description}</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <h4 style={{ color: '#4DE6A8', marginBottom: '0.25rem' }}>Problema</h4>
            <p style={{ fontSize: '0.9rem', color: '#A3AAB7' }}>{project.details.problem}</p>
          </div>
          <div>
            <h4 style={{ color: '#4DE6A8', marginBottom: '0.25rem' }}>Objetivo</h4>
            <p style={{ fontSize: '0.9rem', color: '#A3AAB7' }}>{project.details.objective}</p>
          </div>
          <div>
            <h4 style={{ color: '#4DE6A8', marginBottom: '0.25rem' }}>Proceso Creativo</h4>
            <p style={{ fontSize: '0.9rem', color: '#A3AAB7' }}>{project.details.process}</p>
          </div>
          <div>
            <h4 style={{ color: '#4DE6A8', marginBottom: '0.25rem' }}>Solución</h4>
            <p style={{ fontSize: '0.9rem', color: '#A3AAB7' }}>{project.details.solution}</p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: '#4DE6A8', marginBottom: '0.25rem' }}>Resultado</h4>
          <p style={{ fontSize: '0.9rem', color: '#A3AAB7' }}>{project.details.result}</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => alert('Demo interactiva simulada')}>
            <ExternalLink size={16} /> Live Demo (Demo)
          </button>
          <button className="btn-secondary" onClick={() => alert('Repositorio de ejemplo')}>
            <Code size={16} /> Source Code (Demo)
          </button>
        </div>
      </div>
    </div>
  );
}