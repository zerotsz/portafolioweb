import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" style={{ padding: '6rem 5%', maxWidth: '1300px', margin: '0 auto' }}>
      <h2 className="section-title">CONTACTO</h2>
      <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
        ¿Tienes un proyecto en mente o quieres ponerte en contacto? ¡Escríbeme!
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
        
        {/* INFORMACIÓN DE CONTACTO Y REDES SOCIALES */}
        <div>
          <h3 style={{ fontSize: '1.5rem', color: '#F8FAFC', marginBottom: '1rem', fontWeight: 600 }}>
            Hablemos de tu próximo proyecto
          </h3>
          <p style={{ color: '#A3AAB7', lineHeight: '1.7', marginBottom: '2rem', fontSize: '1rem' }}>
            Estoy disponible para oportunidades laborales como Ingeniero de Software Full Stack, proyectos freelance o colaboraciones técnicas.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(77, 230, 168, 0.1)', borderRadius: '8px', color: '#4DE6A8' }}>
                <Mail size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#A3AAB7', display: 'block' }}>Correo Electrónico</span>
                <a href="mailto:carlospolinmartinez@gmail.com" style={{ color: '#F8FAFC', textDecoration: 'none', fontWeight: 500 }}>
                  carlospolinmartinez@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(77, 230, 168, 0.1)', borderRadius: '8px', color: '#4DE6A8' }}>
                <MapPin size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#A3AAB7', display: 'block' }}>Ubicación</span>
                <span style={{ color: '#F8FAFC', fontWeight: 500 }}>Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* PERFILES DE REDES SOCIALES OFICIALES */}
          <h4 style={{ fontSize: '1rem', color: '#F8FAFC', marginBottom: '1rem', fontWeight: 600 }}>
            Perfiles Profesionales
          </h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Botón GitHub con SVG nativo */}
            <a 
              href="https://github.com/zerotsz" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.2rem', fontSize: '0.9rem', textDecoration: 'none' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              GitHub
            </a>

            {/* Botón LinkedIn con SVG nativo */}
            <a 
              href="https://www.linkedin.com/in/carlos-polin-martinez-188601326/" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.2rem', fontSize: '0.9rem', textDecoration: 'none' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* FORMULARIO DE CONTACTO */}
        <div className="card-glass" style={{ padding: '2.5rem', background: '#111925', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <CheckCircle2 size={48} color="#4DE6A8" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>¡Mensaje Enviado!</h3>
              <p style={{ color: '#A3AAB7' }}>Gracias por escribir. Me pondré en contacto contigo a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', color: '#F8FAFC', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Nombre Completo
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Tu nombre" 
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F8FAFC',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#F8FAFC', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="tu.correo@ejemplo.com" 
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F8FAFC',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#F8FAFC', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Asunto
                </label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  placeholder="Oportunidad laboral / Consulta" 
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F8FAFC',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#F8FAFC', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Mensaje
                </label>
                <textarea 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Escribe tu mensaje aquí..." 
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F8FAFC',
                    outline: 'none',
                    resize: 'none'
                  }}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '0.75rem', gap: '0.5rem', marginTop: '0.5rem' }}>
                <Send size={16} /> Enviar Mensaje
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}