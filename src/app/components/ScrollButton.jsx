// components/ScrollButton.jsx
"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function ScrollCircleTopBottom() {
  // 0 → 1 across the whole page
  const { scrollYProgress } = useScroll();

  // Smooth it out
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.25,
  });

  // Button reveal after ~10% scroll
  const btnOpacity = useTransform(progress, [0.10, 0.16], [0, 1]);
  const btnScale   = useTransform(progress, [0.10, 0.16], [0.9, 1]);

  // SVG ring geometry
  const size = 56;               // overall box
  const stroke = 4;              // stroke width
  const r = useMemo(() => (size - stroke) / 2, [size, stroke]);
  const C = useMemo(() => 2 * Math.PI * r, [r]);

  // Progress ring: convert progress -> stroke dash offset (1 - progress)
  const dashOffset = useTransform(progress, (v) => C * (1 - v));

  const handleClick = () => {
    const p = progress.get(); // current smoothed progress
    if (p < 0.5) {
      // go to bottom
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    } else {
      // go to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Cross-fade icons around midpoint
  const upOpacity   = useTransform(progress, [0.50, 0.55], [0, 1]);
  const downOpacity = useTransform(progress, [0.45, 0.50], [1, 0]);

  return (
    <>
    <motion.span
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-primary"
      />
      <motion.button
      type="button"
      aria-label="Scroll to top or bottom"
      onClick={handleClick}
      className="fixed right-4 bottom-5 sm:right-6 sm:bottom-6 z-[60]
                 inline-flex items-center justify-center"
      style={{ opacity: btnOpacity, scale: btnScale }}
    >
      
      {/* Progress Ring */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-primary/20"
          strokeWidth={stroke}
        />
        {/* Progress stroke */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-primary"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={C}
          style={{ strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // start at top
        />
      </svg>

      {/* Inner button (sits on top, smaller than ring) */}
      <span
        className="absolute inline-flex h-11 w-11 items-center justify-center rounded-full
                   bg-primary text-white shadow-lg ring-1 ring-black/10
                   hover:bg-primary/90 active:scale-95 transition-all"
      >
        {/* Down icon (near top of page) */}
        <motion.span
          className="absolute"
          style={{ opacity: downOpacity }}
          aria-hidden="true"
        >
          <FaArrowDown className="h-4 w-4" />
        </motion.span>

        {/* Up icon (after midpoint) */}
        <motion.span
          className="absolute"
          style={{ opacity: upOpacity }}
          aria-hidden="true"
        >
          <FaArrowUp className="h-4 w-4" />
        </motion.span>
      </span>
    </motion.button></>
    
  );
}
