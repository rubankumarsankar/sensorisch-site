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
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 size-[34rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-primary/40 via-sky-400/30 to-emerald-400/30" />
        <div className="absolute -bottom-48 -right-32 size-[36rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-fuchsia-400/30 via-primary/30 to-amber-300/30" />
      </div>

      <div className="section-container py-18 md:py-28">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1 text-xs font-semibold"
          >
            Why Choose Senso™ Ranges?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Each Senso™ family blends deep application know-how with
            market-proven formulations.
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="block h-1 w-40 md:w-52 bg-gradient-to-r from-primary to-emerald-500 rounded-full mt-3 origin-left"
            />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base md:text-lg text-muted-foreground"
          >
            Delivering consistent results that scale from pilot to production.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="group relative rounded-2xl border border-foreground/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 md:p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]"
            >
              {/* Glow ring on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-primary/20 transition" />

              <div className="flex items-start gap-4">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    {f.blurb}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
