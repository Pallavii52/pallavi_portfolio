// ✅ Fix — add useState to the import
import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Hero.css';

// Place your image in src/assets/profile.jpg and uncomment the line below:
import profileImg from "../assets/pallu.jpg";


export default function Hero() {
  const leftRef  = useScrollReveal(100);
  const rightRef = useScrollReveal(300);
  const [imgError, setImgError] = useState(false);

   const showImage = profileImg && !imgError;

  return (
    <section id="hero" className="hero-section section-wrap">
      <div className="container hero-inner">

        {/* LEFT */}
        <div className="hero-left reveal" ref={leftRef}>
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to <strong>Full-Time Opportunities</strong>
          </div>

          <h1>
            Hi, I'm<br />
            <span className="grad">Pallavi Jadhav</span>
          </h1>

          <p className="hero-sub">
            Java Full Stack Developer with a passion for building clean, scalable
            web applications. Skilled in React, Spring Boot, and MySQL.
          </p>

          <div className="hero-cta">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">2<span className="stat-plus">+</span></span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">8.09</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">5<span className="stat-plus">+</span></span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>

              {/* RIGHT — Avatar card */}
        <div className="hero-right reveal" ref={rightRef}>
          <div className="avatar-card">

            {/* Profile picture wrapper */}
            <div className="avatar-img-wrap">
              <div className="avatar-ring" />

              {showImage ? (
                <img
                  src={profileImg}
                  alt="Pallavi Jadhav"
                  className="avatar-photo"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="avatar-initials">PJ</div>
              )}

             
            </div>

            <div className="avatar-name">Pallavi Jadhav</div>
            <div className="avatar-role">Full Stack Developer</div>
            <div className="avatar-divider" />
            <div className="avatar-tags">
              {['Java', 'React', 'Spring Boot', 'MySQL'].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {!showImage && (
              <p className="avatar-hint">
                💡 Add <code>src/assets/profile.jpg</code> to show your photo
              </p>
            )}
          </div>

          <div className="floating-badge fb1">
            <span className="fb-dot" /> Available for hire
          </div>
          <div className="floating-badge fb2">
            📍 Pune, India
          </div>
        </div>

      </div>
    </section>
  );
}