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
    lineGrad: "from-emerald-500 via-emerald-400 to-emerald-300",
    wash: "from-emerald-500/10 via-emerald-400/10 to-transparent",
    btnBg: "bg-emerald-500/10",
    btnText: "text-emerald-700",
    btnHover:
      "hover:bg-emerald-500/20 hover:shadow-[0_0_18px_rgba(16,185,129,0.45)]",
  },
  {
    dot: "bg-amber-500",
    ring: "ring-amber-400/35",
    textGrad: "from-amber-700 via-amber-600 to-amber-500",
    lineGrad: "from-amber-500 via-amber-400 to-amber-300",
    wash: "from-amber-500/10 via-amber-400/10 to-transparent",
    btnBg: "bg-amber-500/10",
    btnText: "text-amber-700",
    btnHover:
      "hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(245,158,11,0.45)]",
  },
  {
    dot: "bg-rose-500",
    ring: "ring-rose-400/35",
    textGrad: "from-rose-700 via-rose-600 to-rose-500",
    lineGrad: "from-rose-500 via-rose-400 to-rose-300",
    wash: "from-rose-500/10 via-rose-400/10 to-transparent",
    btnBg: "bg-rose-500/10",
    btnText: "text-rose-700",
    btnHover:
      "hover:bg-rose-500/20 hover:shadow-[0_0_18px_rgba(244,63,94,0.45)]",
  },
  {
    dot: "bg-violet-500",
    ring: "ring-violet-400/35",
    textGrad: "from-violet-700 via-violet-600 to-violet-500",
    lineGrad: "from-violet-500 via-violet-400 to-violet-300",
    wash: "from-violet-500/10 via-violet-400/10 to-transparent",
    btnBg: "bg-violet-500/10",
    btnText: "text-violet-700",
    btnHover:
      "hover:bg-violet-500/20 hover:shadow-[0_0_18px_rgba(139,92,246,0.45)]",
  },
  {
    dot: "bg-cyan-500",
    ring: "ring-cyan-400/35",
    textGrad: "from-cyan-700 via-cyan-600 to-cyan-500",
    lineGrad: "from-cyan-500 via-cyan-400 to-cyan-300",
    wash: "from-cyan-500/10 via-cyan-400/10 to-transparent",
    btnBg: "bg-cyan-500/10",
    btnText: "text-cyan-700",
    btnHover:
      "hover:bg-cyan-500/20 hover:shadow-[0_0_18px_rgba(6,182,212,0.45)]",
  },
  {
    dot: "bg-indigo-500",
    ring: "ring-indigo-400/35",
    textGrad: "from-indigo-700 via-indigo-600 to-indigo-500",
    lineGrad: "from-indigo-500 via-indigo-400 to-indigo-300",
    wash: "from-indigo-500/10 via-indigo-400/10 to-transparent",
    btnBg: "bg-indigo-500/10",
    btnText: "text-indigo-700",
    btnHover:
      "hover:bg-indigo-500/20 hover:shadow-[0_0_18px_rgba(99,102,241,0.45)]",
  },
];

export default function BespokeApplicationsAlt() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container py-5">
        {/* Header (unchanged) */}
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
              className="mx-auto mt-6 h-1 rounded bg-black"
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

        {/* Gradient spine + rows */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/30 via-amber-400/30 to-rose-500/30" />
          <ol className="relative z-10 space-y-10 md:space-y-14">
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
      className={`grid items-center md:grid-cols-2 gap-8 md:gap-12 ${
        left ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      {/* Title block (per-row gradient text + divider) */}
      <div className={`relative ${left ? "text-right" : "text-left"}`}>
        <span
          aria-hidden
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 size-3 rounded-full ${
            accent.dot
          } ring-4 ring-white dark:ring-background ${
            left ? "-right-[1.625rem]" : "-left-[1.625rem]"
          }`}
        />
        <h3
          className={`inline-block text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br ${accent.textGrad}`}
        >
          {title}
        </h3>
        <div
          className={`mt-2 h-[2px] w-20 rounded-full bg-gradient-to-r ${
            accent.lineGrad
          } ${left ? "ml-auto" : ""}`}
        />
      </div>

      {/* Blurb ribbon  -  outline/line look with accent left bar + tinted ring */}
      <div
        className={`relative group overflow-hidden rounded-xl ring-1 ${
          accent.ring
        } ${left ? "md:pl-8" : "md:pr-8"}`}
      >
        {/* left accent line */}
        <span
          aria-hidden
          className={`absolute top-0 ${
            left ? "left-0" : "right-0"
          } h-full w-[3px] rounded-sm bg-gradient-to-b ${accent.lineGrad}`}
        />
        {/* subtle accent wash */}
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-r ${accent.wash} backdrop-blur-md`}
        />
        {/* moving sheen on hover */}
        <motion.div
          aria-hidden
          initial={{ x: "-120%" }}
          whileHover={{ x: "120%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/20"
        />
        <p className="relative p-5 md:p-6 section-paragraph text-black/75 leading-relaxed">
          {blurb}
        </p>

        {/* Accent “Custom Solutions” badge with inner hover sweep */}
        <motion.button
          className={`absolute bottom-3 ${
            left ? "right-4" : "left-4"
          } text-[11px] uppercase tracking-wider font-semibold 
                      ${accent.btnText} ${
            accent.btnBg
          } px-3.5 py-1.5 rounded-full backdrop-blur-sm
                      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        accent.btnHover
                      } relative overflow-hidden`}
          initial={{ opacity: 0, y: 4, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.08 }}
        >
          {/* inner hover sweep */}
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
