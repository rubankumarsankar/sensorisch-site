// components/CapabilitiesSection.jsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const GROUPS = [
  {
    title: "Creation Labs",
    desc: "Advanced facilities for developing flavours, fragrance accords, extracts, emulsions, and taste modulators.",
    icon: "/icons/lab.png", // swap with your asset
    accent: "from-primary to-primary/60",
    chips: [
      "Flavour Development",
      "Fragrance Accords",
      "Natural Extracts",
      "Emulsion Systems",
    ],
  },
  {
    title: "Application Labs",
    desc: "Specialized testing environments including bakery ovens, beverage benches, dairy pilots, and confectionery lines.",
    icon: "/icons/applications.png",
    accent: "from-amber-500 to-amber-400",
    chips: [
      "Bakery Testing",
      "Beverage Benches",
      "Dairy Pilots",
      "Confectionery Lines",
    ],
  },
  {
    title: "Sensory & Consumer Science",
    desc: "Comprehensive testing including triangle tests, hedonic panels, and Jobs-to-be-Done insights.",
    icon: "/icons/sensory.png",
    accent: "from-emerald-500 to-emerald-400",
    chips: [
      "Triangle Testing",
      "Hedonic Panels",
      "Consumer Insights",
      "Sensory Mapping",
    ],
  },
  {
    title: "Quality & Compliance",
    desc: "Clean-label guidance, regional regulatory support, and comprehensive documentation.",
    icon: "/icons/quality.png",
    accent: "from-sky-500 to-sky-400",
    chips: [
      "Clean-label Guidance",
      "Regional Compliance",
      "COAs & Specifications",
      "Documentation",
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="relative bg-background text-foreground">
      <div className="section-container py-16 md:py-24">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 dark:border-white/10 px-4 py-1.5 text-xs font-medium text-foreground/70">
            Our Capabilities
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Comprehensive facilities & expertise to{" "}
            <span className="text-primary">bring your vision to life</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-6 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
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
          {GROUPS.map((g, idx) => (
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
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
                <img src={g.icon} alt="" className="h-7 w-7 object-contain" />
              </div>

              {/* title */}
              <h3 className="text-lg md:text-xl font-semibold">{g.title}</h3>
              {/* animated accent line */}
              <motion.div
                className={`h-[3px] w-0 my-3 rounded bg-gradient-to-r ${g.accent}`}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }} // w-16
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* description */}
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                {g.desc}
              </p>

              {/* chips */}
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="mt-4 flex flex-wrap gap-2.5"
              >
                {g.chips.map((chip) => (
                  <motion.li
                    key={chip}
                    variants={fadeUp}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="rounded-md border border-black/10 dark:border-white/10
                               bg-white/70 dark:bg-white/5 px-3 py-1.5 text-xs md:text-sm
                               text-foreground/80 shadow-sm"
                  >
                    {chip}
                  </motion.li>
                ))}
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
