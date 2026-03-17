import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  {
    icon: '🏛️',
    title: 'Public Service Request Tracking System',
    type: 'Web Application',
    desc: 'A citizen-facing platform for public service issue tracking with admin-side request management and real-time status updates for government services.',
    stack: ['Java', 'JDBC', 'MySQL', 'HTML/CSS'],
    link: '#',
  },
  {
    icon: '✅',
    title: 'Digital Approval Workflow System',
    type: 'Web Application',
    desc: 'A role-based approval workflow system that automates request submission, multi-level approval routing, and real-time tracking for organizational processes.',
    stack: ['Java', 'JDBC', 'MySQL', 'Springboot'],
    link: '#',
  },
  {
    icon: '🎓',
    title: 'Placement Eligibility System',
    type: ' Console Based Application',
    desc: 'A console-based application that checks whether a student is eligible for campus placement based on criteria like percentage and backlogs. It collects student data, applies eligibility rules, and displays the result.',
    stack: ['Java','JDBC'],
    link: '#',
  },
];

function ProjectCard({ proj, index }) {
  const ref = useScrollReveal(index * 120);
  return (
    <div className="project-card reveal" ref={ref}>
      <div className="proj-icon">{proj.icon}</div>
      <div className="proj-title">{proj.title}</div>
      <div className="proj-type">{proj.type}</div>
      <p className="proj-desc">{proj.desc}</p>
      <div className="proj-stack">
        {proj.stack.map((s) => <span key={s}>{s}</span>)}
      </div>
      <a href={proj.link} className="proj-link">View Project →</a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrap alt">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">What I've Built</h2>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={i} proj={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
