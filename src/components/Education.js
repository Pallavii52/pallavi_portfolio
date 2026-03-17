import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const eduData = [
  {
    period: '2022 – 2025',
    degree: 'Bachelor of Computer Science (BSc CS)',
    school: 'Modern College of Arts, Science and Commerce, Pune',
    badge: 'CGPA — 8.09',
  },
  {
    period: '2020 – 2021',
    degree: 'HSC — General Science',
    school: 'Mahilashram Junior College, Pune',
    badge: 'Marks — 71.67%',
  },
];

function EduItem({ item, index }) {
  const ref = useScrollReveal(index * 150);
  return (
    <div className="edu-item reveal" ref={ref}>
      <div className="edu-year">{item.period}</div>
      <div className="edu-card">
        <div className="edu-degree">{item.degree}</div>
        <div className="edu-school">{item.school}</div>
        <span className="edu-badge">{item.badge}</span>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic Journey</h2>
        <div className="edu-timeline">
          {eduData.map((item, i) => (
            <EduItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
