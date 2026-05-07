"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden
      className="fixed left-0 right-0 top-0 h-[3px] origin-left z-50 bg-gradient-to-r from-gold via-gold-light to-gold"
    />
  );
}
