"use client";

import React from "react";
import { motion } from "framer-motion";

/* --------- DATA --------- */
const CARDS = [
  {
    title: "Bakery",
    icon: "/home-img-1.png",
    desc: "Oven-true flavours for cakes, cookies, pastries & breads",
    badge: "Specialized Solutions",
    badgeClass: "bg-red-100 text-red-700",
    lineClass: "from-red-500 to-red-400",
  },
  {
    title: "Beverages",
    icon: "/home-img-2.png",
    desc: "Oven-true flavours for cakes, cookies, pastries & breads",
    badge: "Specialized Solutions",
    badgeClass: "bg-blue-100 text-blue-700",
    lineClass: "from-blue-500 to-blue-400",
  },
  {
    title: "Dairy",
    icon: "/home-img-3.png",
    desc: "Creamy, authentic notes for ice creams & yoghurts",
    badge: "Specialized Solutions",
    badgeClass: "bg-green-100 text-green-700",
    lineClass: "from-green-500 to-green-400",
  },
  {
    title: "Confectionery",
    icon: "/home-img-4.png",
    desc: "Playful profiles with controlled flavour release",
    badge: "Specialized Solutions",
    badgeClass: "bg-orange-100 text-orange-700",
    lineClass: "from-orange-500 to-orange-400",
  },
  {
    title: "Naturals",
    icon: "/home-img-5.png",
    desc: "Clean-label extracts & nature-derived solutions",
    badge: "Specialized Solutions",
    badgeClass: "bg-emerald-100 text-emerald-700",
    lineClass: "from-emerald-500 to-emerald-400",
  },
  {
    title: "Health & Wellness",
    icon: "/home-img-6.png",
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
          className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((c) => (
            <motion.article
              key={c.title}
              variants={item}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              whileTap={{ scale: 0.995 }}
              className="group relative overflow-hidden 
             bg-white/60 backdrop-blur-sm
             shadow-xl h-[470px]
             ring-1 ring-black/5
             p-5 md:p-6
             transition-all duration-300
             hover:bg-white/80 hover:backdrop-blur-lg
             hover:shadow-xl
             hover:ring-primary/20"
            >
              {/* glow halo behind content (scales in on hover) */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-10 rounded-[24px]
               bg-[radial-gradient(60%_60%_at_50%_0%,rgba(210,36,34,0.10),transparent_70%)]
               opacity-0"
                initial={false}
                animate={{}}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />

              {/* subtle top sheen that fades in on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0
               transition-opacity duration-300 group-hover:opacity-100
               bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent_40%)]"
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
                  className="object-contain select-none"
                  draggable="false"
                />
              </motion.div>

              {/* title */}
              <h3 className="section-title text-3xl">{c.title}</h3>

              {/* underline: scroll-in + hover extend */}
              <motion.div
                className={`h-[2px] w-0 my-2 rounded bg-gradient-to-r ${c.lineClass}`}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }} // 64px = w-16
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* description */}
              <p className="section-subtitle text-black text-2xl mt-5">
                {c.desc}
              </p>

              {/* badge: scroll-in + hover pop */}
              <motion.div
                className="absolute bottom-5 left-5"
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 14px rgba(210,36,34,0.18)",
                  }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className={`inline-block rounded-md px-3 py-1 text-sm font-semibold ${c.badgeClass}
                ring-1 ring-black/5 cursor-default`}
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
