import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { projects } from '../data';
import './Projects.css';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`project-card glass-card ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Accent line */}
      <motion.div
        className="project-card__accent"
        style={{ background: project.color }}
        animate={{ scaleX: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Header */}
      <div className="project-card__header">
        <motion.span
          className="project-card__icon"
          animate={{ rotate: hovered ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.4 }}
        >
          {project.icon}
        </motion.span>
        {project.featured && (
          <span className="project-card__badge">Featured</span>
        )}
        <div className="project-card__links">
          {project.sourceCode && project.sourceCode !== '#' && (
            <motion.a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Source Code"
            >
              <FiGithub />
            </motion.a>
          )}
          {project.liveDemo && project.liveDemo !== '#' && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--live"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Live Demo"
            >
              <FiExternalLink />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      {/* Tags */}
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card__tag" style={{ '--tag-color': project.color }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Link hints */}
      <div className="project-card__actions">
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__action"
        >
          <FiCode size={12} /> Source Code
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-card__action ${project.liveDemo === '#' ? 'project-card__action--placeholder' : ''}`}
        >
          <FiExternalLink size={12} />
          {project.liveDemo === '#' ? 'Add Live URL →' : 'Live Demo'}
        </a>
      </div>

      {/* Hover glow */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="project-card__glow"
            style={{ background: project.color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-section__header"
        >
          <div className="section-label">03. Work</div>
          <h2 className="section-title">Projects</h2>
          <p className="projects-section__subtitle">
            Things I've built.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>More projects on GitHub</p>
          <motion.a
            href="https://github.com/SoumyaShri1209"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub /> View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
