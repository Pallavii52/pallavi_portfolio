import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  {
    icon: '🔍',
    title: 'InstiFind - IT Training Institute Discovery Platform',
    type: 'Full-Stack Web Application',
    desc: 'A centralized web platform enabling students to search, filter, and compare IT training institutes based on courses, fees, location, and placement records. Built RESTful APIs using Spring Boot with Hibernate/JPA to manage institute listings, course catalogs, and student enquiry data backed by a PostgreSQL database. Developed an admin module for managing institute records, student enquiries, and counsellor assignments, plus lead-tracking and analytics for source-wise and course-wise demand.',
    stack: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'PostgreSQL', 'React.js'],
    link: '#',
  },
  {
    icon: '✉️',
    title: 'AUTOREPLY - Automated Email Reply Generator',
    type: 'Full-Stack Web Application',
    desc: 'Architected a backend system using Spring Boot that exposes REST APIs to receive email content and return AI-generated reply suggestions. Built a responsive React.js frontend allowing users to input email content, view generated replies, and copy responses with a single click. Integrated a third-party AI service API for real-time replies, with error handling, input validation, and thorough Postman-based API testing.',
    stack: ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'External AI Service'],
    link: '#',
  },
  {
    icon: '🧪',
    title: 'Ingredient Recognizer - AI-Powered Food Label Scanner',
    type: 'AI-Powered Web Application',
    desc: 'An AI-powered web application that extracts ingredient names from food label images using OCR technology and displays the detected ingredients in an easy-to-read format. Built a Spring Boot backend with OCR integration for image processing and text extraction, with a React.js frontend for image upload and result visualization. Implemented intelligent parsing to identify and categorize ingredients, with support for multiple food label formats and real-time processing.',
    stack: ['Java', 'Spring Boot', 'React.js', 'OCR', 'AI/ML', 'REST APIs'],
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