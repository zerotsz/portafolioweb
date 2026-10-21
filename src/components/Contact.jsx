import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correoelectronico: '',
    asunto: '',
    mensaje: ''
  });

  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const templateParams = {
        nombre: formulario.nombre,
        correoelectronico: formulario.correoelectronico,
        asunto: formulario.asunto,
        mensaje: formulario.mensaje
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        title: '¡Mensaje Enviado!',
        text: 'Gracias por contactarme. Te responderé a la brevedad.',
        icon: 'success',
        confirmButtonColor: '#4DE6A8',
        background: '#0F1622',
        color: '#FFFFFF'
      });

      setFormulario({ nombre: '', correoelectronico: '', asunto: '', mensaje: '' });

    } catch (error) {
      console.error('Error al enviar el mensaje:', error);

      Swal.fire({
        title: 'Error al enviar',
        text: 'Hubo un problema al enviar el mensaje. Inténtalo más tarde.',
        icon: 'error',
        confirmButtonColor: '#FF5555',
        background: '#0F1622',
        color: '#FFFFFF'
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '6rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* CABECERA PRINCIPAL */}
      <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FFFFFF', margin: 0, textAlign: 'left', letterSpacing: '0.02em' }}>
        CONTACTO
      </h2>
      <p style={{ color: '#4DE6A8', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.08em', marginTop: '0.5rem', marginBottom: '3.5rem', textTransform: 'uppercase', textAlign: 'left' }}>
        ¿TIENES UN PROYECTO EN MENTE O QUIERES PONERTE EN CONTACTO? ¡ESCRÍBEME!
      </p>

      {/* CONTENEDOR PRINCIPAL DOS COLUMNAS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        alignItems: 'start'
      }}>

        {/* COLUMNA IZQUIERDA: INFORMACIÓN Y PERFILES */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            Hablemos de tu próximo proyecto
          </h3>
          
          <p style={{ color: '#94A3B8', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '2.5rem', maxWidth: '480px' }}>
            Estoy disponible para oportunidades laborales como Ingeniero de Software Full Stack, proyectos freelance o colaboraciones técnicas.
          </p>

          {/* DATOS DE CONTACTO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            
            {/* ITEM EMAIL */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(77, 230, 168, 0.05)',
                border: '1px solid rgba(77, 230, 168, 0.15)',
                color: '#4DE6A8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Mail size={20} />
              </div>
              <div>
                <span style={{ display: 'block', color: '#64748B', fontSize: '0.75rem', fontWeight: 500, marginBottom: '0.2rem' }}>
                  Correo Electrónico
                </span>
                <a href="mailto:carlospolinmartinez@gmail.com" style={{ color: '#FFFFFF', fontWeight: 700, margin: 0, fontSize: '0.95rem', textDecoration: 'none' }}>
                  carlospolinmartinez@gmail.com
                </a>
              </div>
            </div>

            {/* ITEM UBICACIÓN */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(77, 230, 168, 0.05)',
                border: '1px solid rgba(77, 230, 168, 0.15)',
                color: '#4DE6A8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <span style={{ display: 'block', color: '#64748B', fontSize: '0.75rem', fontWeight: 500, marginBottom: '0.2rem' }}>
                  Ubicación
                </span>
                <p style={{ color: '#FFFFFF', fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>
                  Lima, Perú
                </p>
              </div>
            </div>

          </div>

          {/* PERFILES PROFESIONALES (SVG NATIVOS) */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem' }}>
              Perfiles Profesionales
            </h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              
              <a 
                href="https://github.com/zerotsz" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.65rem 1.25rem',
                  backgroundColor: '#0F1622',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                GitHub
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.65rem 1.25rem',
                  backgroundColor: '#0F1622',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: TARJETA DEL FORMULARIO */}
        <div style={{
          backgroundColor: '#0F1622',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '2.5rem'
        }}>
          <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* NOMBRE COMPLETO */}
            <div>
              <label style={{ display: 'block', color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Nombre Completo
              </label>
              <input 
                type="text" 
                name="nombre" 
                value={formulario.nombre}
                onChange={manejarCambio}
                required 
                disabled={cargando}
                placeholder="Tu nombre"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: '#0A0F17',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* CORREO ELECTRÓNICO */}
            <div>
              <label style={{ display: 'block', color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Correo Electrónico
              </label>
              <input 
                type="email" 
                name="correoelectronico" 
                value={formulario.correoelectronico}
                onChange={manejarCambio}
                required 
                disabled={cargando}
                placeholder="tu.correo@ejemplo.com"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: '#0A0F17',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* ASUNTO */}
            <div>
              <label style={{ display: 'block', color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Asunto
              </label>
              <input 
                type="text" 
                name="asunto" 
                value={formulario.asunto}
                onChange={manejarCambio}
                required 
                disabled={cargando}
                placeholder="Oportunidad laboral / Consulta"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: '#0A0F17',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* MENSAJE */}
            <div>
              <label style={{ display: 'block', color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Mensaje
              </label>
              <textarea 
                name="mensaje" 
                value={formulario.mensaje}
                onChange={manejarCambio}
                required 
                disabled={cargando}
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: '#0A0F17',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* BOTÓN ENVIAR */}
            <button 
              type="submit" 
              disabled={cargando}
              style={{ 
                width: '100%',
                padding: '0.85rem', 
                backgroundColor: '#4DE6A8',
                color: '#0A0F17',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '0.5rem',
                cursor: cargando ? 'wait' : 'pointer',
                opacity: cargando ? 0.75 : 1,
                transition: 'background-color 0.2s ease'
              }}
            >
              <Send size={18} /> {cargando ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}