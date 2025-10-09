// components/VisionMission.jsx
"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

/* ---- Counter that animates when visible ---- */
function Counter({ value = 0, duration = 1.2, decimals = 0, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 120, damping: 20, mass: 0.25 });
  const text = useTransform(spring, (v) => {
    const n = Number(v).toFixed(decimals);
    return `${prefix}${Number(n).toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      // animate from current to target
      const start = mv.get();
      const startTime = performance.now();
      const run = (t) => {
        const p = Math.min((t - startTime) / (duration * 1000), 1);
        mv.set(start + (value - start) * p);
        if (p < 1) requestAnimationFrame(run);
      };
      requestAnimationFrame(run);
    }
  }, [inView, value, duration, mv]);

  return (
    <motion.span ref={ref} style={{}} className="inline-block">
      <motion.span style={{}}>{text}</motion.span>
    </motion.span>
  );
}

export default function VisionMission() {
  // Use numeric values + suffixes so counters are robust
  const KPIS = [
    { value: 500, suffix: "+", label: "Flavour Profiles" },
    { value: 50,  suffix: "+", label: "Application Systems" },
    { value: 2,   suffix: "",  label: "Regional Markets" },
    { value: 24,  suffix: "/7", label: "Quality Assurance" },
  ];

  return (
    <section className="relative bg-background text-foreground">
      <div className="section-container py-16 md:py-24">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 dark:border-white/10 px-4 py-1.5 text-xs font-medium text-foreground/70">
            Brand Vision & Mission
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-primary">Vision</span> & <span className="text-primary">Mission</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-6 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          />
        </motion.div>

        {/* Two cards: Vision / Mission */}
        <div className="mt-10 md:mt-14 grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
            <h3 className="text-xl md:text-2xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-base md:text-lg text-foreground/80 leading-relaxed">
              to be the most trusted global partner for sensory innovation, delivering precision driven flavours, colours, and ingredient solutions that inspire product excellence and emotional consumer connections.
            </p>
          </motion.article>

          {/* Mission */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
            <h3 className="text-xl md:text-2xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-base md:text-lg text-foreground/80 leading-relaxed">
              sensorisch is committed to empowering creators in the bakery, beverage, dairy,culinary, and wellness industries by co-developing sensory solutions that are scientifically advanced, creatively inspired, and commercially scalable. we exist to ensure every
product resonates with its audience - not just in taste, but in experience."
            </p>
          </motion.article>
        </div>

        {/* KPIs (animated on scroll) */}
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 md:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {KPIS.map((x, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className=" p-6 text-center "
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <Counter value={x.value} suffix={x.suffix} />
              </div>
              <div className="mt-1 text-sm md:text-base font-medium text-foreground/80">{x.label}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
