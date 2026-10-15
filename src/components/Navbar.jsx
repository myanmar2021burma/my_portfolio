import { useState } from 'react';

const LINKS = [
  { id: 'home', label: '🏠 Home' },
  { id: 'about', label: '📖 About' },
  { id: 'projects', label: '🚀 Projects' },
  { id: 'contact', label: '✉️ Contact' },
];

export default function Navbar({ page, onNavigate, dark, onToggleDark }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fas fa-feather-alt" /> Thet.dev
      </div>
      <div className="menu-icon" onClick={() => setOpen((o) => !o)}>
        <i className="fas fa-bars" />
      </div>
      <div className={`nav-links ${open ? 'show' : ''}`}>
        {LINKS.map((link) => (
          <a
            key={link.id}
            className={`nav-link ${page === link.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              go(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
        <button className="dark-toggle" onClick={onToggleDark}>
          <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'}`} /> {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}
