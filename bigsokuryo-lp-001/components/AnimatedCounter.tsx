"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
};

export default function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
  decimals,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(decimals ? (0).toFixed(decimals) : "0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (decimals !== undefined) {
          setDisplay(latest.toFixed(decimals));
        } else {
          setDisplay(Math.round(latest).toLocaleString());
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, motionValue, decimals]);

  return (
    <motion.span ref={ref} className="inline-block tabular-nums">
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
