// components/ValuesSection.jsx
"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Science-Led Creativity",
    desc: "Combining data-driven R&D with culinary craft to create distinctive taste experiences.",
    icon: "/icons/icon-10.png", // replace with your asset or emoji
    hue: "from-primary/20 to-primary/0",
    line: "from-primary to-primary/60",
  },
  {
    title: "Reliability",
    desc: "Batch-to-batch consistency with robust QA/QC processes that ensure predictable results.",
    icon: "/icons/icon-11.png",
    hue: "from-emerald-400/20 to-emerald-400/0",
    line: "from-emerald-500 to-emerald-400",
  },
  {
    title: "Speed with Certainty",
    desc: "Rapid sampling and validation processes that accelerate time-to-market without compromising quality.",
    icon: "/icons/icon-12.png",
    hue: "from-amber-400/20 to-amber-400/0",
    line: "from-amber-500 to-amber-400",
  },
  {
    title: "Responsibility",
    desc: "Thoughtful sourcing and waste-aware processes that support sustainable business practices.",
    icon: "/icons/icon-8.png",
    hue: "from-sky-400/20 to-sky-400/0",
    line: "from-sky-500 to-sky-400",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function ValuesSection() {
  return (
    <section className="relative bg-background text-foreground">
      
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 dark:border-white/10 px-4 py-1.5 text-xs font-medium text-foreground/70">
            Our Values
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            The principles that guide <span className="text-primary">everything we do</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/80">
            From initial concept to final delivery, these beliefs shape our decisions and partnerships.
          </p>
          {/* underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-6 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          />
        </motion.div>

        {/* Values grid */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl p-6 md:p-7
                         bg-white/70 dark:bg-white/5 backdrop-blur
                         ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
            >
              {/* ambient hue */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-2xl bg-gradient-to-br ${v.hue}`}
              />
              {/* icon */}
              <div className="mb-4 inline-flex h-15 w-15 items-center justify-center rounded-xl bg-white/70 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
                {/* swap to next/image if preferred */}
                <img src={v.icon} alt="" className="h-10 w-10 object-contain" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold">{v.title}</h3>

              {/* animated accent line */}
              <motion.div
                className={`h-[3px] w-16 my-3 rounded bg-gradient-to-r ${v.line}`}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                {v.desc}
              </p>

              {/* hover micro-interaction: sheen */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_40%)]" />
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
