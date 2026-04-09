
import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';
import './Cursor.css';

const isCoarse = window.matchMedia('(pointer: coarse)').matches;

export default function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
// Outer ring — fast but still slightly smooth
const ringX = useSpring(mouseX, { stiffness: 800, damping: 35, mass: 0.2 });
const ringY = useSpring(mouseY, { stiffness: 800, damping: 35, mass: 0.2 });

// Inner dot — instant, 1:1 with mouse
const dotX = useSpring(mouseX, { stiffness: 2000, damping: 80, mass: 0.1 });
const dotY = useSpring(mouseY, { stiffness: 2000, damping: 80, mass: 0.1 });

  const ringRef = useRef(null);
  const clicking = useRef(false);
  const hovering = useRef(false);

  useEffect(() => {
    if (isCoarse) return;

    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleDown = () => {
      clicking.current = true;
      ringRef.current?.classList.add('cursor-ring--click');
    };

    const handleUp = () => {
      clicking.current = false;
      ringRef.current?.classList.remove('cursor-ring--click');
    };

    const handleHoverStart = () => {
      hovering.current = true;
      ringRef.current?.classList.add('cursor-ring--hover');
    };

    const handleHoverEnd = () => {
      hovering.current = false;
      ringRef.current?.classList.remove('cursor-ring--hover');
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    const interactiveEls = document.querySelectorAll('a, button, [role="button"], .glass-card');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  if (isCoarse) return null;

  return (
    <>
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}