// components/QualityResponsibility.jsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const pills = [
  { label: "International Standards",  cls: "bg-indigo-100 text-indigo-700 ring-indigo-200" },
  { label: "FSSAI Compliant",          cls: "bg-rose-100   text-rose-700   ring-rose-200"   },
  { label: "Clean Label",              cls: "bg-emerald-100 text-emerald-700 ring-emerald-200" },
  { label: "Sustainable Sourcing",     cls: "bg-violet-100 text-violet-700 ring-violet-200" },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};
const word = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function QualityResponsibility() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 70%", "end 20%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });

  return (
    <section ref={sectionRef} className="py-15 relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="section-container text-center"
      >
        {/* title word-by-word */}
        <motion.h2 className="section-title text-black flex items-center justify-center gap-2 flex-wrap">
          <motion.span variants={word}>Quality</motion.span>
          <motion.span variants={word}>&</motion.span>
          <motion.span variants={word} className="text-primary">Responsibility</motion.span>
        </motion.h2>

        {/* underline grow */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 112 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-6 h-1 rounded bg-black"
        />

        <p className="section-paragraph max-w-3xl mx-auto">
          Clean-label guidance, regional compliance, batch consistency, and
          responsible sourcing built into every solution we deliver.
        </p>

        {/* Pills */}
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {pills.map((p) => (
            <motion.li key={p.label} variants={item}>
              <motion.span
                whileHover={{ y: -2, scale: 1.03, rotate: -0.5 }}
                whileTap={{ scale: 0.98 }}
                className={`relative inline-flex items-center rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold 
                            ring-1 ${p.cls} shadow-sm transition-shadow hover:shadow-md`}
              >
                {/* sheen on hover */}
                <span className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                  <motion.span
                    initial={false}
                    whileHover={{ x: ["-120%", "120%"] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 h-full w-1/3 -translate-x-full skew-x-[-20deg] bg-white/20"
                  />
                </span>
                {p.label}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
