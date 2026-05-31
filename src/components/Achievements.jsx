import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">04. Milestones</div>
          <h2 className="section-title">Achievements</h2>
          <p className="achievements-subtitle">Certifications, simulations & learning milestones</p>
        </motion.div>

        {/* Timeline */}
        <div className="achievements-timeline">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Left: Icon + Year */}
              <div className="timeline-item__meta">
                <motion.div
                  className="timeline-item__icon-wrap"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="timeline-item__icon">{item.icon}</span>
                </motion.div>
                <span className="timeline-item__year">{item.year}</span>
              </div>

              {/* Connector line dot */}
              <div className="timeline-item__dot">
                <motion.div
                  className="timeline-item__dot-inner"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                />
              </div>

              {/* Right: Content card */}
              <motion.div
                className="timeline-item__card glass-card"
                whileHover={{ y: -4, x: 4 }}
              >
                <div className="timeline-item__org-badge">{item.org}</div>
                <h3 className="timeline-item__title">{item.title}</h3>
                <p className="timeline-item__desc">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}

          {/* Vertical timeline line */}
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
      </div>
    </section>
  );
}
