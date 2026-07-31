import React, { useState, useEffect } from 'react';
import { useTheme } from '../App';
import './Navbar.css';

const links = ['Hero', 'About', 'Education', 'Projects', 'Certificates', 'Contact'];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => handleNav('hero')}>
        Pallavi<span>.dev</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l}>
            <button className="nav-link-btn" onClick={() => handleNav(l)}>
              {l}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="btn-theme" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
        <a
          className="btn-resume"
          href="/Jadhav_Pallavi_Resume_Java.pdf"
          download="Jadhav_Pallavi_Resume_Java.pdf"
        >
          ⬇ Resume
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}