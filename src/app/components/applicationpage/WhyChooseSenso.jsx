// app/components/WhyChooseSenso.jsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Timer, BadgeCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.05 },
  }),
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Pre-Validated Systems",
    blurb:
      "Extensively tested formulations that reduce trial time and minimize development risks.",
  },
  {
    icon: Timer,
    title: "Faster Time-to-Market",
    blurb:
      "Application-ready formats that integrate seamlessly into your existing processes.",
  },
  {
    icon: BadgeCheck,
    title: "Consistent Quality",
    blurb:
      "Robust QA/QC processes ensure batch-to-batch consistency and reliable performance.",
  },
];

export default function WhyChooseSenso() {
  return (
    <section className="relative overflow-hidden bg-background text-black py-10">
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/5 px-3 py-1 text-xs font-semibold"
          >
            Why Choose Senso Ranges?
          </motion.span> */}

          <motion.h2
            variants={fadeUp}
            className="mt-3 section-title text-black"
          >
            Why Choose <span className="text-primary">Senso </span> Ranges?
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="block h-1 w-40 md:w-52 bg-primary rounded-full mt-3 mx-auto origin-left"
            />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 section-paragraph"
          >
           Each Senso family combines deep application knowledge with market-proven formulations, delivering consistent results that scale from pilot to production.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        >
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="group relative flex max-w-sm w-full flex-col items-center text-center rounded-2xl border border-black/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 md:p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]"
            >
              {/* Glow ring on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-primary/20 transition" />

              <div className="flex flex-col items-center gap-3">
                <div className="grid place-items-center rounded-xl bg-primary/10 text-primary p-3">
                  <f.icon className="h-10 w-10" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold leading-tight">
                  {f.title}
                </h3>
                <p className="mt-2 section-paragraph">
                  {f.blurb}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
