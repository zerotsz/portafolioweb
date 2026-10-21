import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#inicio');

  const links = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'SOBRE MÍ', href: '#about' },
    { name: 'HABILIDADES', href: '#skills' },
    { name: 'SERVICIOS', href: '#services' },
    { name: 'PROYECTOS', href: '#projects' },
    { name: 'EXPERIENCIA', href: '#experience' },
    { name: 'CERTIFICADOS', href: '#certificates' },
    { name: 'CONTACTO', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%',
      backgroundColor: 'rgba(11, 16, 25, 0.82)', 
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(77, 230, 168, 0.15)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem 5%', 
      zIndex: 1000
    }}>
      
      {/* BRANDING LOGO: Isotipo "Z" Futurista + Texto ZTRS */}
      <a href="#inicio" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.85rem', 
        textDecoration: 'none' 
      }}>
        {/* Isotipo SVG de la "Z" Futurista con Resplandor Neón */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'drop-shadow(0 0 8px rgba(77, 230, 168, 0.6))',
          transition: 'transform 0.3s ease'
        }}>
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H32L12 28H32" stroke="#4DE6A8" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="bevel" />
            <circle cx="32" cy="6" r="2.5" fill="#4DE6A8" />
            <circle cx="4" cy="28" r="2.5" fill="#4DE6A8" />
          </svg>
        </div>

        {/* Texto ZTRS con tipografía cibernética */}
        <span style={{ 
          color: '#F8FAFC', 
          fontWeight: 800, 
          fontSize: '1.35rem', 
          letterSpacing: '2px',
          textShadow: '0 0 12px rgba(255, 255, 255, 0.2)'
        }}>
          ZTRS
        </span>
      </a>

      {/* Botón de Menú Hamburguesa en Móvil */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ 
          display: 'none', 
          background: 'rgba(77, 230, 168, 0.05)', 
          border: '1px solid rgba(77, 230, 168, 0.3)', 
          borderRadius: '8px',
          padding: '0.4rem',
          color: '#4DE6A8', 
          cursor: 'pointer',
          boxShadow: '0 0 10px rgba(77, 230, 168, 0.2)'
        }} 
        className="menu-toggle-btn"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Estilos CSS Responsive & Animaciones Cyber */}
      <style>{`
        @media (max-width: 968px) {
          .menu-toggle-btn { display: block !important; }
          .nav-links-container {
            display: ${isOpen ? 'flex' : 'none'} !important;
            position: absolute; 
            top: 100%; 
            left: 0; 
            width: 100%;
            background-color: rgba(11, 16, 25, 0.95); 
            backdrop-filter: blur(16px);
            flex-direction: column;
            padding: 2rem 0; 
            border-bottom: 1px solid rgba(77, 230, 168, 0.2);
            align-items: center; 
            gap: 1.5rem;
            box-shadow: 0 15px 30px rgba(0,0,0,0.8);
          }
        }

        .nav-link-item {
          position: relative;
          color: #A3AAB7;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
          padding: 0.4rem 0;
        }

        .nav-link-item:hover {
          color: #4DE6A8 !important;
          text-shadow: 0 0 8px rgba(77, 230, 168, 0.6);
        }

        /* Línea / Punto Neón Indicador de Sección Activa */
        .nav-link-item.active {
          color: #4DE6A8 !important;
          text-shadow: 0 0 10px rgba(77, 230, 168, 0.8);
        }

        .nav-link-item.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #4DE6A8;
          box-shadow: 0 0 8px #4DE6A8;
          border-radius: 2px;
        }
      `}</style>

      {/* Menú de Navegación */}
      <ul className="nav-links-container" style={{ display: 'flex', gap: '1.75rem', listStyle: 'none', alignItems: 'center', margin: 0, padding: 0 }}>
        {links.map((link) => {
          const isActive = activeLink === link.href;
          return (
            <li key={link.name}>
              <a
                href={link.href}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
                onClick={() => { setActiveLink(link.href); setIsOpen(false); }}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}