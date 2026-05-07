"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(Math.round(latest).toLocaleString());
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, motionValue]);

  return (
    <motion.span ref={ref} className="inline-block tabular-nums">
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
