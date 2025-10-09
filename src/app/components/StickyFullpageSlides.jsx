// app/components/StickyFullpageSlides.jsx
"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function StickyFullpageSlides({
  children,
  className = "",
  gap = 0,
  fade = true,
  translate = true,
  heightMultiplier = 1,
}) {
  const slides = useMemo(() => React.Children.toArray(children), [children]);
  const n = Math.max(slides.length, 1);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // track which slide is active (0..n-1)
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.min(n - 1, Math.max(0, Math.floor(p * n + 1e-6)));
    if (idx !== active) setActive(idx);
  });

  const anims = slides.map((_, i) => {
    const start = i / n;
    const end = (i + 1) / n;
    const local = useTransform(scrollYProgress, [start, end], [0, 1], { clamp: true });

    const opacity = fade ? useTransform(local, [0, 0.2, 0.8, 1], [0, 1, 1, 0]) : undefined;
    const y = translate ? useTransform(local, [0, 1], [24, -24]) : undefined;

    return { opacity, y };
  });

  return (
    <section
      ref={targetRef}
      className={`relative w-full ${className}`}
      style={{ height: `calc(${n} * ${heightMultiplier} * 100vh)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {slides.map((slide, i) => {
          const style = {
            ...(anims[i].opacity ? { opacity: anims[i].opacity } : {}),
            ...(anims[i].y ? { y: anims[i].y } : {}),
            zIndex: 100 + i,                        // higher index sits above lower
            pointerEvents: i === active ? "auto" : "none", // only active slide gets clicks
          };
          return (
            <motion.div key={i} className="absolute inset-0 will-change-transform" style={style}>
              <div className={gap ? `h-full w-full pt-[${gap}px] pb-[${gap}px]` : "h-full w-full"}>
                {slide}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
