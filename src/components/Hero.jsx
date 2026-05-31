import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { personalInfo } from '../data';
import './Hero.css';

// Animated floating particles
function FloatingParticle({ x, y, size, delay, color }) {
  return (
    <motion.div
      className="hero__particle"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 4,
  color: i % 3 === 0 ? 'var(--accent-cyan)' : i % 3 === 1 ? 'var(--accent-violet)' : 'var(--accent-pink)',
}));

// Animated grid lines
function GridLines() {
  return (
    <div className="hero__grid">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="hero__grid-line hero__grid-line--v"
          style={{ left: `${(i + 1) * 12.5}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.04 }}
          transition={{ duration: 1.5, delay: i * 0.08 }}
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="hero__grid-line hero__grid-line--h"
          style={{ top: `${(i + 1) * 16.66}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.04 }}
          transition={{ duration: 1.5, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const typeSequence = personalInfo.taglines.flatMap(t => [t, 2000]);

  return (
    <section id="hero" className="hero section">
      <GridLines />
      <div className="hero__particles">
        {particles.map((p, i) => <FloatingParticle key={i} {...p} />)}
      </div>

      {/* Glowing ring decoration */}
      <motion.div
        className="hero__ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="hero__ring hero__ring--2"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container hero__content">
        {/* Left: Text Content */}
        <div className="hero__text">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="hero__badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I'm{' '}
            <span className="hero__name-accent">
              {personalInfo.name.split(' ')[0]}
              <br />
              {personalInfo.name.split(' ')[1]}
            </span>
          </motion.h1>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="hero__role-prefix">{'< '}</span>
            <TypeAnimation
              sequence={typeSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero__role-text"
            />
            <span className="hero__role-cursor" />
            <span className="hero__role-prefix">{' />'}</span>
          </motion.div>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Stats */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            {[
              { value: '5+', label: 'Projects Built' },
              { value: '8.0', label: 'GPA Score' },
              { value: '7+', label: 'Certifications' },
            ].map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Link to="projects" smooth={true} offset={-80} duration={600}>
              <button className="btn-solid">View Projects</button>
            </Link>
            <a href={personalInfo.resumeLink} className="btn-neon" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {[
              { icon: <FiGithub />, href: personalInfo.github, label: 'GitHub' },
              { icon: <FiLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: <FiMail />, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__photo-wrapper">
            <motion.div
              className="hero__photo-orbit"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <div className="hero__orbit-dot hero__orbit-dot--1" />
              <div className="hero__orbit-dot hero__orbit-dot--2" />
              <div className="hero__orbit-dot hero__orbit-dot--3" />
            </motion.div>
            <div className="hero__photo-frame">
              {personalInfo.photo ? (
                <img src={personalInfo.photo} alt={personalInfo.name} className="hero__photo" />
              ) : (
                <div className="hero__photo-placeholder">
                  <span className="hero__photo-initials">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                  <p className="hero__photo-hint">📸 Add your photo in src/data.js</p>
                </div>
              )}
            </div>
            {/* Floating tags */}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Link to="about" smooth={true} offset={-80} duration={600}>
          <motion.div
            className="hero__scroll-btn"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
