import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <motion.div
          className="footer__logo"
          whileHover={{ scale: 1.05 }}
        >
          <span className="footer__logo-text">SS</span>
          <span className="footer__logo-dot" />
        </motion.div>

        <p className="footer__tagline">
          Building the web, one commit at a time.
        </p>

    <div className="footer__socials">
  {[
    { icon: <FiGithub />, href: personalInfo.github, label: 'GitHub' },
    { icon: <FiLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { 
      icon: <FiMail />, 
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,  // 👈 CHANGED THIS
      label: 'Email' 
    },
  ].map((s) => (
    <motion.a
      key={s.label}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="footer__social"
      whileHover={{ y: -3, color: 'var(--accent-cyan)' }}
      aria-label={s.label}
    >
      {s.icon}
    </motion.a>
  ))}
</div>

        <div className="footer__divider" />

        <p className="footer__credit">
          Designed & built with <FiHeart className="footer__heart" /> by{' '}
          <span className="footer__name">{personalInfo.name}</span>{' '}
          <span className="footer__year">© {new Date().getFullYear()}</span>
        </p>

        <p className="footer__tech">
          Built with React + Vite + Framer Motion
        </p>
      </div>
    </footer>
  );
}
