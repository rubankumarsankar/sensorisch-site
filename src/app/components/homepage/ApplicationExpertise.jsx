"use client";

import React from "react";
import { motion } from "framer-motion";

/* --------- DATA --------- */
const CARDS = [
  {
    title: "Bakery",
    icon: "/icons/icon-4.png",
    desc: "Oven-true flavours for cakes, cookies, pastries & breads",
    badge: "Specialized Solutions",
    badgeClass: "bg-red-100 text-red-700",
    lineClass: "from-red-500 to-red-400",
  },
  {
    title: "Beverages",
    icon: "/icons/icon-5.png",
    desc: "Oven-true flavours for cakes, cookies, pastries & breads",
    badge: "Specialized Solutions",
    badgeClass: "bg-blue-100 text-blue-700",
    lineClass: "from-blue-500 to-blue-400",
  },
  {
    title: "Dairy",
    icon: "/icons/icon-6.png",
    desc: "Creamy, authentic notes for ice creams & yoghurts",
    badge: "Specialized Solutions",
    badgeClass: "bg-green-100 text-green-700",
    lineClass: "from-green-500 to-green-400",
  },
  {
    title: "Confectionery",
    icon: "/icons/icon-7.png",
    desc: "Playful profiles with controlled flavour release",
    badge: "Specialized Solutions",
    badgeClass: "bg-orange-100 text-orange-700",
    lineClass: "from-orange-500 to-orange-400",
  },
  {
    title: "Naturals",
    icon: "/icons/icon-8.png",
    desc: "Clean-label extracts & nature-derived solutions",
    badge: "Specialized Solutions",
    badgeClass: "bg-emerald-100 text-emerald-700",
    lineClass: "from-emerald-500 to-emerald-400",
  },
  {
    title: "Health & Wellness",
    icon: "/icons/icon-9.png",
    desc: "Masking solutions for nutraceuticals & pharmaceuticals",
    badge: "Specialized Solutions",
    badgeClass: "bg-rose-100 text-rose-700",
    lineClass: "from-rose-500 to-rose-400",
  },
];

/* --------- ANIMATION VARIANTS --------- */
const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.35, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

export default function ApplicationExpertise() {
  return (
    <section className="section">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="section-title">Our Application Expertise</h2>
          <p className="section-subtitle">
            Specialized solutions across industries with deep application
            knowledge and market-ready systems
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((c) => (
            <motion.article
              key={c.title}
              variants={item}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              whileTap={{ scale: 0.995 }}
              className="group relative rounded-2xl bg-white shadow-[0_10px_25px_-12px_rgba(0,0,0,0.2)]
                         ring-1 ring-black/5 p-5 md:p-6 overflow-hidden transition-transform duration-300"
            >
              {/* soft hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0
                              transition-opacity duration-300 group-hover:opacity-100
                              "
              />

              {/* icon (gentle float) */}
              <motion.div
                aria-hidden
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-3"
              >
                <img
                  src={c.icon}
                  alt={`${c.title} icon`}
                  className="h-12 w-12 object-contain select-none"
                  draggable="false"
                />
              </motion.div>

              {/* title */}
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>

              {/* animated underline */}
              <motion.div
                className={`h-[3px] w-0 my-3 rounded bg-gradient-to-r ${c.lineClass}`}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }} // 64px = w-16
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* description */}
              <p className="text-sm text-gray-600 min-h-[56px]">{c.desc}</p>

              {/* badge */}
              <motion.div
                className="mt-5 flex justify-start"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 12px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`inline-block rounded-md px-3 py-1 text-base font-semibold ${c.badgeClass} ring-1 ring-black/5 cursor-default`}
                >
                  {c.badge}
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
