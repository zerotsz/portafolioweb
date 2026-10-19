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
      position: 'fixed', top: 0, left: 0, width: '100%',
      backgroundColor: 'rgba(11, 16, 25, 0.9)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.25rem 5%', zIndex: 1000
    }}>
      <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.25rem', color: '#F8FAFC', textDecoration: 'none' }}>
        <div style={{ width: '24px', height: '24px', backgroundColor: '#4DE6A8', transform: 'rotate(45deg)' }}></div>
        <span>CARLOS POLÍN</span>
      </a>

      <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#F8FAFC', cursor: 'pointer' }} className="menu-toggle-btn">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <style>{`
        @media (max-width: 968px) {
          .menu-toggle-btn { display: block !important; }
          .nav-links-container {
            display: ${isOpen ? 'flex' : 'none'} !important;
            position: absolute; top: 100%; left: 0; width: 100%;
            background-color: #111925; flex-direction: column;
            padding: 2rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);
            align-items: center; gap: 1.5rem;
          }
        }
      `}</style>

      <ul className="nav-links-container" style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', alignItems: 'center' }}>
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              style={{
                color: activeLink === link.href ? '#4DE6A8' : '#A3AAB7',
                textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color 0.3s'
              }}
              onClick={() => { setActiveLink(link.href); setIsOpen(false); }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}