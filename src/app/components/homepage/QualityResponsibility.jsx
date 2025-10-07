// components/QualityResponsibility.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const pills = [
  { label: "International Standards",  cls: "bg-indigo-100 text-indigo-700 ring-indigo-200" },
  { label: "FSSAI Compliant",          cls: "bg-rose-100   text-rose-700   ring-rose-200"   },
  { label: "Clean Label",              cls: "bg-emerald-100 text-emerald-700 ring-emerald-200" },
  { label: "Sustainable Sourcing",     cls: "bg-violet-100 text-violet-700 ring-violet-200" },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

export default function QualityResponsibility() {
  return (
    <section className="section">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="section-container text-center"
      >
        <h2 className="section-title text-primary">Quality & Responsibility</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
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
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold 
                            ring-1 ${p.cls} shadow-sm transition-shadow hover:shadow-md`}
              >
                {p.label}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
