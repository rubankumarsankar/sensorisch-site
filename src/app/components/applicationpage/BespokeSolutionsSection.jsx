// app/components/BespokeSolutionsSection.jsx
"use client";

import * as React from "react"; // ✅ needed for React.useRef
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Sparkles, SwatchBook, FlaskConical, ShieldCheck,
  ArrowRight, CheckCircle2
} from "lucide-react";

/* ---------- Motion ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show:   (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.05 }
  }),
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

/* ---------- Data ---------- */
const POINTS = [
  "Develop exclusive flavours that set your products apart",
  "Adapt to manufacturing needs with liquid, powder, water-soluble, or oil-soluble formats",
  "Ensure global compliance with FSSAI and international standards",
  "Integrate natural and clean-label ingredients, meeting today's conscious consumer demands",
];

const STEPS = [
  { n: 1, title: "Discover", desc: "Market scan, sensory mapping, and technical feasibility assessment",
    bullets: ["Consumer insights", "Technical constraints", "Market positioning"], icon: Sparkles },
  { n: 2, title: "Design", desc: "Iterative creation with matrix constraints built-in from the start",
    bullets: ["Heat & pH stability", "Protein/fat systems", "Shear resistance"], icon: SwatchBook },
  { n: 3, title: "Validate", desc: "Bench-to-pilot tests, sensory validation, and stability assessment",
    bullets: ["Consumer testing", "Stability studies", "Performance validation"], icon: FlaskConical },
  { n: 4, title: "Scale", desc: "QA/QC protocols, specifications, and production documentation",
    bullets: ["Quality systems", "Production specs", "Scale-up support"], icon: ShieldCheck },
];

/* =========================================================
   SECTION 1: Bespoke Solutions (Intro + Points + CTA)
========================================================= */
export function BespokeSolutionsIntro({
  onPrimaryHref = "/contact",
  onPrimaryLabel = "Discuss Your Bespoke Needs",
  onProcessHref = "#process",
}) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  return (
    <section className="relative bg-background text-foreground overflow-hidden">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="origin-left fixed left-0 top-0 h-0.5 w-full bg-gradient-to-r from-primary via-fuchsia-500 to-emerald-500 z-[60]"
      />

      {/* Gradient mesh + animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 size-[36rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-primary/40 via-sky-400/30 to-emerald-400/30 animate-pulse" />
        <div className="absolute -bottom-40 -right-40 size-[36rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-fuchsia-400/30 via-primary/30 to-amber-300/30 animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="relative mt-3 section-title text-black"
          >
            <span className="text-primary">Tailored</span> to Your Needs
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="block h-1 w-36 md:w-48 bg-primary rounded-full mt-3 mx-auto origin-left"
            />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-muted-foreground"
          >
            At Sensorisch, we know that every brand has a unique identity, and so should its flavours.
            Our bespoke solutions deliver exactly what your product requires—from taste profile to technical format.
          </motion.p>
        </motion.div>

        {/* Points grid */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 justify-items-center"
        >
          {POINTS.map((p, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="group relative flex items-start gap-3 rounded-xl border border-foreground/10
                         bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-4 py-3 shadow-sm
                         max-w-xl w-full"
            >
              <div className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <span className="text-sm md:text-base">{p}</span>
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-100 ring-2 ring-primary/10" />
            </motion.li>
          ))}
        </motion.ul>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href={onPrimaryHref}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-white font-semibold shadow hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {onPrimaryLabel}
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          <motion.a
            href={onProcessHref}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg border border-foreground/15 px-5 py-3 font-semibold hover:bg-foreground/5"
          >
            Our Development Process
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SECTION 2: Our Development Process (Animated Timeline)
========================================================= */
export function DevelopmentProcessSection() {
  const containerRef = React.useRef(null); // ✅ now valid

  // Progress of the vertical line inside the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.2 });

  return (
    <section id="process" className="relative bg-background text-foreground overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 h-24 w-[80%] rounded-full blur-3xl bg-primary/5" />
      </div>

      <div className="section-container py-18 md:py-28">
        {/* Heading */}
        <div className="mb-10 md:mb-12 max-w-3xl mx-auto text-center">
          <h2 className="section-title text-black">Our Development <span className="text-primary">Process</span> </h2>
          <p className="mt-3 text-muted-foreground">
            From concept to scale, our structured approach ensures consistent results and reduces time-to-market.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative mx-auto max-w-5xl">
          {/* Base line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-foreground/10" />
          {/* Progress line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="origin-top absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-gradient-to-b from-primary via-fuchsia-500 to-emerald-500 rounded-full"
          />

          <div className="grid grid-cols-1 gap-10 md:gap-14">
            {STEPS.map((s, i) => {
              const isLeft = i % 2 === 0; // alternate sides on desktop

              return (
                <motion.div
                  key={s.n}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="relative grid items-start md:grid-cols-2"
                >
                  {/* spacer for two-column alignment */}
                  <div className="hidden md:block md:col-start-1" />

                  {/* Center dot + number */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-2 z-10"
                    aria-hidden
                  >
                    <div className="relative">
                      <motion.span
                        className="absolute inset-[-6px] rounded-full bg-primary/20 blur-md"
                        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="grid size-4 place-items-center rounded-full ring-2 ring-primary/30 bg-primary" />
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold bg-background px-2 py-0.5 rounded-md border border-foreground/10 shadow">
                        {s.n}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`md:max-w-[520px] ${
                      isLeft
                        ? "md:col-start-1 md:justify-self-end md:pr-8"
                        : "md:col-start-2 md:justify-self-start md:pl-8"
                    }`}
                  >
                    <motion.article
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      className="relative group rounded-2xl border border-foreground/10
                                 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 md:p-6
                                 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]"
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] ring-1 ring-transparent group-hover:ring-primary/20" />

                      <div className="flex items-start gap-4">
                        <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                          <s.icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-lg md:text-xl font-semibold leading-tight">{s.title}</h3>
                          <p className="mt-1 text-sm md:text-base text-muted-foreground">{s.desc}</p>

                          <ul className="mt-3 flex flex-wrap gap-2">
                            {s.bullets.map((b) => (
                              <li
                                key={b}
                                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs md:text-sm"
                              >
                                <span className="size-1.5 rounded-full bg-primary" /> {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Convenience default: renders both sections in order
========================================================= */
export default function BespokeSolutionsSection(props) {
  return (
    <>
      <BespokeSolutionsIntro {...props} />
      <DevelopmentProcessSection />
    </>
  );
}
