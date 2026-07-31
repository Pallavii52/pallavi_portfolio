import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const contactLinks = [
  { icon: '✉️', label: 'pallavijadhav5204@gmail.com', href: 'mailto:pallavijadhav5204@gmail.com' },
  { icon: '📞', label: '+91-9284459267', href: 'tel:+919284459267' },
  { icon: '💼', label: 'linkedin.com/in/pallavijadhav52', href: 'https://linkedin.com/in/pallavijadhav52' },
  { icon: '🐙', label: 'github.com/Pallavii52', href: 'https://github.com/Pallavii52' },
  { icon: '📍', label: 'Pune, Maharashtra, India', href: '#' },
];

export default function Contact() {
  const leftRef = useScrollReveal(0);
  const rightRef = useScrollReveal(150);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    
    // Validate form
    if (!name || !email || !subject || !message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    setIsSubmitting(true);
    setStatus('sending');

    try {
     
      const response = await fetch('https://formspree.io/f/maqrzprk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrap alt">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-inner">
          {/* LEFT */}
          <div className="contact-info reveal" ref={leftRef}>
            <p className="contact-para">
              I'm actively looking for full-time opportunities as a Java Full Stack Developer.
              If you have a role or a project you think I'd be a great fit for, I'd love to hear from you!
            </p>
            <div className="contact-links">
              {contactLinks.map((l) => (
                <a 
                  key={l.label} 
                  href={l.href} 
                  className="c-link" 
                  target={l.href.startsWith('http') ? '_blank' : '_self'} 
                  rel="noreferrer"
                >
                  <div className="c-icon">{l.icon}</div>
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <form className="contact-form reveal" ref={rightRef} onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name" 
                  name="name" 
                  type="text"
                  placeholder="John Doe"
                  value={form.name} 
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email" 
                  name="email" 
                  type="email"
                  placeholder="john@company.com"
                  value={form.email} 
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject" 
                name="subject" 
                type="text"
                placeholder="Job Opportunity — Full Stack Developer"
                value={form.subject} 
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" 
                name="message" 
                rows="5"
                placeholder="Hi Pallavi, I'd love to discuss..."
                value={form.message} 
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <button type="submit" className="btn-send" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message ✉️'}
            </button>

            {status === 'sending' && (
              <p className="form-msg sending">⏳ Sending your message...</p>
            )}
            {status === 'error' && (
              <p className="form-msg error">⚠ Failed to send. Please try again or email me directly.</p>
            )}
            {status === 'success' && (
              <p className="form-msg success">✓ Message sent successfully! I'll get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}