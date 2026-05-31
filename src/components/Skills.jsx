import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, skillIcons } from '../data';
import './Skills.css';

function SkillCard({ skill, index }) {
  const icon = skillIcons[skill];
  return (
    <motion.div
      className="skill-card glass-card"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.05 }}
    >
      {icon ? (
        <img src={icon} alt={skill} className="skill-card__icon" />
      ) : (
        <div className="skill-card__icon skill-card__icon--text">
          {skill.slice(0, 2).toUpperCase()}
        </div>
      )}
      <span className="skill-card__name">{skill}</span>
    </motion.div>
  );
}

// Marquee for auto-scrolling skills
function SkillMarquee({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrapper">
      <motion.div
        className="marquee-track"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((skill, i) => {
          const icon = skillIcons[skill];
          return (
            <div key={i} className="marquee-item">
              {icon && <img src={icon} alt={skill} className="marquee-item__icon" />}
              <span>{skill}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const allSkillCategories = Object.entries(skills);
  const allSkillsFlat = Object.values(skills).flat();
  const row1 = allSkillsFlat.slice(0, Math.ceil(allSkillsFlat.length / 2));
  const row2 = allSkillsFlat.slice(Math.ceil(allSkillsFlat.length / 2));

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">02. Expertise</div>
          <h2 className="section-title">Tech Stack</h2>
          <p className="skills-section__subtitle">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling marquee rows */}
      <div className="skills-marquee-section">
        <SkillMarquee items={row1} />
        <SkillMarquee items={row2} reverse />
      </div>

      {/* Categorized Skills */}
      <div className="container">
        <div className="skills-grid">
          {allSkillCategories.map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              className="skills-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <div className="skills-category__header">
                <span className="skills-category__label">{category}</span>
                <span className="skills-category__count">{categorySkills.length}</span>
              </div>
              <div className="skills-category__items">
                {categorySkills.map((skill) => {
                  const icon = skillIcons[skill];
                  return (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      {icon && <img src={icon} alt="" className="skill-tag__icon" />}
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
