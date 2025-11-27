// components/BespokeApplicationsAlt.jsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const APPLICATIONS = [
  {
    title: "Premium Beverages",
    blurb:
      "Signature flavour profiles for craft sodas, artisanal teas, and specialty coffee blends",
  },
  {
    title: "Artisan Bakery",
    blurb:
      "Exclusive flavours for gourmet cakes, specialty breads, and premium pastries.",
  },
  {
    title: "Health & Wellness",
    blurb:
      "Palatable solutions for nutraceuticals, protein supplements, and functional foods.",
  },
  {
    title: "Luxury Confectionery",
    blurb:
      "Sophisticated taste experiences for premium chocolates and artisanal sweets.",
  },
  {
    title: "Dairy Innovation",
    blurb:
      "Unique profiles for premium ice creams, specialty yogurts, and craft cheeses.",
  },
  {
    title: "Personal Care",
    blurb:
      "Refreshing notes for premium oral care and personal hygiene products.",
  },
];

/* accent palette per row (rotates) */
const ACCENTS = [
  {
    dot: "bg-emerald-500",
    ring: "ring-emerald-400/35",
    textGrad: "from-emerald-600 via-emerald-500 to-emerald-400",
    btnBg: "bg-emerald-500/10",
    btnText: "text-emerald-700",
    btnHover:
      "hover:bg-emerald-500/20 hover:shadow-[0_0_18px_rgba(16,185,129,0.45)]",
  },
  {
    dot: "bg-amber-500",
    ring: "ring-amber-400/35",
    textGrad: "from-amber-700 via-amber-600 to-amber-500",
    btnBg: "bg-amber-500/10",
    btnText: "text-amber-700",
    btnHover:
      "hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(245,158,11,0.45)]",
  },
  {
    dot: "bg-rose-500",
    ring: "ring-rose-400/35",
    textGrad: "from-rose-700 via-rose-600 to-rose-500",
    btnBg: "bg-rose-500/10",
    btnText: "text-rose-700",
    btnHover:
      "hover:bg-rose-500/20 hover:shadow-[0_0_18px_rgba(244,63,94,0.45)]",
  },
  {
    dot: "bg-violet-500",
    ring: "ring-violet-400/35",
    textGrad: "from-violet-700 via-violet-600 to-violet-500",
    btnBg: "bg-violet-500/10",
    btnText: "text-violet-700",
    btnHover:
      "hover:bg-violet-500/20 hover:shadow-[0_0_18px_rgba(139,92,246,0.45)]",
  },
  {
    dot: "bg-cyan-500",
    ring: "ring-cyan-400/35",
    textGrad: "from-cyan-700 via-cyan-600 to-cyan-500",
    btnBg: "bg-cyan-500/10",
    btnText: "text-cyan-700",
    btnHover:
      "hover:bg-cyan-500/20 hover:shadow-[0_0_18px_rgba(6,182,212,0.45)]",
  },
  {
    dot: "bg-indigo-500",
    ring: "ring-indigo-400/35",
    textGrad: "from-indigo-700 via-indigo-600 to-indigo-500",
    btnBg: "bg-indigo-500/10",
    btnText: "text-indigo-700",
    btnHover:
      "hover:bg-indigo-500/20 hover:shadow-[0_0_18px_rgba(99,102,241,0.45)]",
  },
];

export default function BespokeApplicationsAlt() {
  return (
    <section className="relative overflow-hidden bg-background text-black">
      <div className="section-container py-8 md:py-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mt-4 section-title text-black"
          >
            <span className="text-primary">Bespoke </span>Applications
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mx-auto mt-4 h-1 rounded bg-black"
            />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 section-paragraph text-black/70"
          >
            Custom flavour solutions across industries, tailored to your
            specific product requirements
          </motion.p>
        </motion.div>

        {/* Rows */}
        <div className="relative mx-auto mt-10 md:mt-14 max-w-5xl">
          {/* Center gradient line – desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/30 via-amber-400/30 to-rose-500/30" />

          <ol className="relative z-10 space-y-8 md:space-y-12">
            {APPLICATIONS.map((a, i) => (
              <RibbonRow
                key={a.title}
                index={i}
                title={a.title}
                blurb={a.blurb}
                accent={ACCENTS[i % ACCENTS.length]}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function RibbonRow({ index, title, blurb, accent }) {
  const left = index % 2 === 0;

  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.05 }}
      className="grid items-center gap-8 md:gap-12 md:grid-cols-2"
    >
      {/* ---------- TITLE BLOCK (left/right only for desktop) ---------- */}
      <div
        className={`
          relative
          text-center                                /* MOBILE CENTER */
          ${left
            ? "md:order-1 md:text-right md:justify-self-end"
            : "md:order-2 md:text-left md:justify-self-start"}
        `}
      >
        <span
          aria-hidden
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 size-3 rounded-full
          ${accent.dot} ring-4 ring-white dark:ring-background
          ${left ? "-right-[1.910rem]" : "-left-[1.910rem]"}
        `}
        />

        <h3
          className={`inline-block text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br ${accent.textGrad}`}
        >
          {title}
        </h3>
      </div>

      {/* ---------- CARD BLOCK (ALWAYS CENTERED TEXT + BUTTON) ---------- */}
      <div
        className={`
          relative group overflow-hidden rounded-xl ring-1 ${accent.ring}
          w-full max-w-xl md:max-w-none
          text-center                                  /* ALWAYS CENTER */
          ${left ? "md:order-2" : "md:order-1"}
        `}
      >
        <p className="relative p-4 sm:p-5 md:p-6 section-paragraph text-black/75 leading-relaxed text-center">
          {blurb}
        </p>

        {/* ---------- CENTER BUTTON ALWAYS ---------- */}
        <motion.button
  className={`
    absolute bottom-3
    text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold
    ${accent.btnText} ${accent.btnBg}
    px-3.5 py-1.5 rounded-full backdrop-blur-sm
    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${accent.btnHover} relative overflow-hidden
  `}
  initial={{ opacity: 0, y: 4, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  whileHover={{ scale: 1.08 }}
>
  <motion.span
    aria-hidden
    initial={{ x: "-120%" }}
    whileHover={{ x: "120%" }}
    transition={{ duration: 0.9, ease: "easeInOut" }}
    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/25"
  />
  <span className="relative">Custom Solutions →</span>
</motion.button>

      </div>
    </motion.li>
  );
}
