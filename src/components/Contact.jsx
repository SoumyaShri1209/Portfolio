


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  // HandleSubmit for Vite with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // For Vite - use import.meta.env instead of process.env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: Check if credentials are loaded (remove in production)
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey ? 'Loaded ✓' : 'Missing ✗');

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      title: "Contact from portfolio",
      message: formState.message,
      to_email: personalInfo.email,
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully:', response);
      setSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">05. Contact</div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Open to internships, collaborations, and full-time opportunities.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="contact-info__text">
              Whether you have a project in mind, want to collaborate, or just want to say hello
              — my inbox is always open. I'll get back to you as soon as possible!
            </p>
           <div className="contact-info__links">
  {[
    { 
      icon: <FiMail />, 
      label: 'Email', 
      value: personalInfo.email, 
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`  // 👈 CHANGED THIS
    },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'soumya-shri', href: personalInfo.linkedin },
    { icon: <FiGithub />, label: 'GitHub', value: 'SoumyaShri1209', href: personalInfo.github },
    { icon: <FiMapPin />, label: 'Location', value: personalInfo.location, href: null },
  ].map((item, i) => (
    <motion.div
      key={item.label}
      className="contact-link glass-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + i * 0.1 }}
      whileHover={{ x: 6 }}
    >
      <span className="contact-link__icon">{item.icon}</span>
      <div>
        <span className="contact-link__label">{item.label}</span>
        {item.href ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link__value contact-link__value--link">
            {item.value}
          </a>
        ) : (
          <span className="contact-link__value">{item.value}</span>
        )}
      </div>
    </motion.div>
  ))}
</div>


 

            <motion.div
              className="contact-decoration"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <div className="contact-decoration__ring" />
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="contact-form glass-card">
              <h3 className="contact-form__title">Send a Message</h3>
              
              {error && <div className="error-message">{error}</div>}
              
              <form onSubmit={handleSubmit} className="contact-form__fields">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Soumya Shri"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="you@example.com"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    placeholder="Hi Soumya, I'd love to collaborate on..."
                    rows={5}
                    required
                    disabled={loading}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="contact-form__submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                >
                  {loading ? (
                    <>Sending...</>
                  ) : sent ? (
                    <><FiCheck /> Message Sent!</>
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}