// components/CapabilitiesSection.jsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

/* 🎨 Chip palette (light + dark) */
const CHIP_STYLES = [
  {
    light: "bg-rose-100 text-rose-700 ring-rose-200",
    dark: "dark:bg-rose-500/15 dark:text-rose-200 dark:ring-rose-500/25",
  },
  {
    light: "bg-amber-100 text-amber-700 ring-amber-200",
    dark: "dark:bg-amber-500/15 dark:text-amber-200 dark:ring-amber-500/25",
  },
  {
    light: "bg-emerald-100 text-emerald-700 ring-emerald-200",
    dark: "dark:bg-emerald-500/15 dark:text-emerald-200 dark:ring-emerald-500/25",
  },
  {
    light: "bg-sky-100 text-sky-700 ring-sky-200",
    dark: "dark:bg-sky-500/15 dark:text-sky-200 dark:ring-sky-500/25",
  },
  {
    light: "bg-violet-100 text-violet-700 ring-violet-200",
    dark: "dark:bg-violet-500/15 dark:text-violet-200 dark:ring-violet-500/25",
  },
  {
    light: "bg-fuchsia-100 text-fuchsia-700 ring-fuchsia-200",
    dark: "dark:bg-fuchsia-500/15 dark:text-fuchsia-200 dark:ring-fuchsia-500/25",
  },
  {
    light: "bg-cyan-100 text-cyan-700 ring-cyan-200",
    dark: "dark:bg-cyan-500/15 dark:text-cyan-200 dark:ring-cyan-500/25",
  },
  {
    light: "bg-lime-100 text-lime-700 ring-lime-200",
    dark: "dark:bg-lime-500/15 dark:text-lime-200 dark:ring-lime-500/25",
  },
];

const GROUPS = [
  {
    title: "Creation Labs",
    desc: "Advanced facilities for developing flavours, fragrance accords, extracts, emulsions, and taste modulators.",
    icon: "/icons/icon-13.png",
    accent: "from-amber-500 to-amber-400",
    chips: ["Flavour Development", "Fragrance Accords", "Natural Extracts", "Emulsion Systems"],
  },
  {
    title: "Application Labs",
    desc: "Specialized testing environments including bakery ovens, beverage benches, dairy pilots, and confectionery lines.",
    icon: "/icons/icon-14.png",
    accent: "from-primary to-primary/60 ",
    chips: ["Bakery Testing", "Beverage Benches", "Dairy Pilots", "Confectionery Lines"],
  },
  {
    title: "Sensory & Consumer Science",
    desc: "Comprehensive testing including triangle tests, hedonic panels, and Jobs-to-be-Done insights.",
    icon: "/icons/icon-15.png",
    accent: "from-emerald-500 to-emerald-400",
    chips: ["Triangle Testing", "Hedonic Panels", "Consumer Insights", "Sensory Mapping"],
  },
  {
    title: "Quality & Compliance",
    desc: "Clean-label guidance, regional regulatory support, and comprehensive documentation.",
    icon: "/icons/icon-11.png",
    accent: "from-sky-500 to-sky-400",
    chips: ["Clean-label Guidance", "Regional Compliance", "COAs & Specifications", "Documentation"],
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="relative bg-background text-black">
      <div className="section-container py-16 md:py-24">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mt-4 section-title text-black">
            Comprehensive facilities & expertise to{" "}
            <span className="text-primary">bring your vision to life</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          />
        </motion.div>

        {/* Grid of capability cards */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-2"
        >
          {GROUPS.map((g) => (
            <motion.article
              key={g.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl p-6 md:p-7
                         bg-white/70 dark:bg-white/5 backdrop-blur
                         ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
            >
              {/* ambient hue */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-2xl
                            bg-gradient-to-br ${g.accent} opacity-30`}
              />
              {/* icon */}
              <div className="mb-4 inline-flex h-15 w-15 items-center justify-center">
                <img src={g.icon} alt="" className="h-10 w-10 object-contain" />
              </div>

              {/* title */}
              <h3 className="section-subtitle">{g.title}</h3>
              {/* animated accent line */}
              <motion.div
                className={`h-[3px] w-0 my-3 rounded bg-gradient-to-r ${g.accent}`}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* description */}
              <p className="section-paragraph leading-relaxed">{g.desc}</p>

              {/* chips with different colors */}
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="mt-4 flex flex-wrap gap-2.5"
              >
                {g.chips.map((chip, i) => {
                  const tone = CHIP_STYLES[i % CHIP_STYLES.length];
                  return (
                    <motion.li
                      key={chip}
                      variants={fadeUp}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className={[
                        "rounded-md px-3 py-1.5 text-xs md:text-sm font-medium",
                        "ring-1 shadow-sm transition-all",
                        "border border-black/0 dark:border-white/0", // keep edges clean
                        tone.light,
                        tone.dark,
                      ].join(" ")}
                    >
                      {/* small dot for visual anchor */}
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current/70 align-middle" />
                      {chip}
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* sheen on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_45%)]" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
