import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiCalendar, FiBook } from 'react-icons/fi';
import { personalInfo, education } from '../data';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">01. About</div>
          <h2 className="section-title">Who Am I?</h2>
        </motion.div>

        <div className="about-grid">
          {/* Left */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="about-text__lead">
              I'm a{' '}
              <span className="gradient-text-cyan">passionate Full Stack Developer</span>{' '}
              currently pursuing B.Tech in Computer Science at Dronacharya College of Engineering.
            </p>
            <p className="about-text__body">
              I love crafting elegant, performant web applications — from pixel-perfect frontends to
              robust backend APIs. I have a strong foundation in the MERN stack and enjoy exploring
              new technologies like Next.js, Generative AI integrations, and cloud platforms.
            </p>
            <p className="about-text__body">
              When I'm not coding, I'm completing certifications to stay current with industry trends,
              contributing to open source, and simulating real-world dev environments through Forage
              job simulations.
            </p>

            {/* Info Cards */}
            <div className="about-info">
              {[
                { icon: <FiMapPin />, label: 'Location', value: personalInfo.location },
                { icon: <FiMail />, label: 'Email', value: personalInfo.email },
                { icon: <FiCalendar />, label: 'Graduation', value: '2027 (Expected)' },
                { icon: <FiBook />, label: 'GPA', value: `${education.gpa}` },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="about-info__item glass-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="about-info__icon">{item.icon}</span>
                  <div>
                    <span className="about-info__label">{item.label}</span>
                    <span className="about-info__value">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="education-card glass-card">
              <div className="education-card__header">
                <div className="education-card__icon">🎓</div>
                <div className="education-card__tag">Education</div>
              </div>
              <h3 className="education-card__institution">{education.institution}</h3>
              <p className="education-card__university">{education.university}</p>
              <p className="education-card__degree">{education.degree}</p>
              <div className="education-card__meta">
                <span className="education-card__gpa">
                  <span className="education-card__gpa-value">{education.gpa}</span>
                  <span className="education-card__gpa-label">GPA</span>
                </span>
                <span className="education-card__duration">{education.duration}</span>
              </div>

              <div className="education-card__divider" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
