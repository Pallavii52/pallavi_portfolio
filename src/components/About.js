import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const skills = [
  'Java', 'C', 'HTML5', 'CSS3', 'JavaScript',
  'Bootstrap', 'React', 'Core Java', 'JDBC',
  'Spring Boot', 'MySQL', 'Git & GitHub', 'VS Code', 'Eclipse',
];

const infoCards = [
  { icon: '🎓', title: 'Education',     desc: 'BSc Computer Science — Modern College, Pune. CGPA 8.09 (2022–2025)' },
  { icon: '💼', title: 'Experience',    desc: 'Fresher | Hands-on project experience in academic and collaborative environments' },
  { icon: '🌟', title: 'Soft Skills',   desc: 'Problem-solving · Logical thinking · Effective communication · Quick learner' },
  { icon: '📍', title: 'Location',      desc: 'Pune, Maharashtra, India — Open to remote & on-site opportunities' },
];

export default function About() {
  const leftRef  = useScrollReveal(0);
  const rightRef = useScrollReveal(150);

  return (
    <section id="about" className="section-wrap alt">
      <div className="container">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Who I Am</h2>

        <div className="about-grid">
          <div className="about-left reveal" ref={leftRef}>
            <p className="about-para">
              I'm a Java Full Stack Developer fresher with a strong foundation in Core Java,
              JDBC, HTML, CSS, JavaScript, and backend development. I've built real-world
              academic and collaborative projects with a focus on clean code and problem-solving.
            </p>
            <p className="about-para">
              I'm eager to contribute to scalable web applications, continuously learn new
              technologies, and grow as a software professional in a collaborative team environment.
            </p>

            <p className="section-label" style={{ marginTop: '28px' }}>Technical Skills</p>
            <div className="skills-grid">
              {skills.map((s) => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="about-right reveal" ref={rightRef}>
            {infoCards.map((c) => (
              <div className="info-card" key={c.title}>
                <div className="ic-icon">{c.icon}</div>
                <div className="ic-title">{c.title}</div>
                <div className="ic-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
