import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certificates.css';

const certs = [
  {
    icon: '☕',
    name: 'Java Full Stack Developmant',
    issuer: 'Fortune Cloud Technologies',
    year: '2026',
  },
  {
    icon: '⚛️',
    name: 'React JS Tutorial',
    issuer: 'Great Learning',
    year: '2026',
  },
  {
    icon: '🗄️',
    name: 'SQL Bootcamp',
    issuer: 'Lets Upgrade',
    year: '2026',
  },
];

function CertCard({ cert, index }) {
  const ref = useScrollReveal(index * 120);
  return (
    <div className="cert-card reveal" ref={ref}>
      <div className="cert-icon">{cert.icon}</div>
      <div className="cert-name">{cert.name}</div>
      <div className="cert-issuer">{cert.issuer}</div>
      <div className="cert-year">{cert.year}</div>
      <span className="cert-badge">✓ Verified</span>
    </div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="section-wrap">
      <div className="container">
        <p className="section-label">Certifications</p>
        <h2 className="section-title">Credentials &amp; Learning</h2>
        <div className="cert-grid">
          {certs.map((c, i) => (
            <CertCard key={i} cert={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
