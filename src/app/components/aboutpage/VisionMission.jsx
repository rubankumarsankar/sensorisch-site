// components/VisionMission.jsx
"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

/* ---- Counter that animates when visible ---- */
function Counter({
  value = 0,
  duration = 1.2,
  decimals = 0,
  suffix = "",
  prefix = "",
}) {
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
    <motion.span ref={ref} className="inline-block">
      <motion.span>{text}</motion.span>
    </motion.span>
  );
}

export default function VisionMission() {
  const KPIS = [
    { value: 500, suffix: "+", label: "Flavour Profiles" },
    { value: 50, suffix: "+", label: "Application Systems" },
    { value: 2, suffix: "", label: "Regional Markets" },
    { value: 24, suffix: "/7", label: "Quality Assurance" },
  ];

  return (
    <section className="relative bg-background text-black">
      <div className="section-container py-12 md:py-20">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-primary">Vision</span> &{" "}
            <span className="text-primary">Mission</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-5 h-1 rounded bg-black"
          />
        </motion.div>

        {/* Two cards: Vision / Mission */}
        <div className="mt-8 md:mt-12 grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-5 sm:p-6 md:p-8 ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
          >
            <h3 className="section-subtitle text-primary">Our Vision</h3>
            <p className="mt-3 section-paragraph leading-relaxed text-sm sm:text-base">
              to be the most trusted global partner for sensory innovation,
              delivering precision driven flavours, colours, and ingredient
              solutions that inspire product excellence and emotional consumer
              connections.
            </p>
          </motion.article>

          {/* Mission */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-5 sm:p-6 md:p-8 ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
          >
            <h3 className="section-subtitle text-primary">Our Mission</h3>
            <p className="mt-3 section-paragraph leading-relaxed text-sm sm:text-base">
              sensorisch is committed to empowering creators in the bakery,
              beverage, dairy,culinary, and wellness industries by co-developing
              sensory solutions that are scientifically advanced, creatively
              inspired, and commercially scalable. we exist to ensure every
              product resonates with its audience - not just in taste, but in
              experience."
            </p>
          </motion.article>
        </div>

        {/* KPIs (animated on scroll) */}
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-8 md:mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {KPIS.map((x, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="p-3 sm:p-4 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                <Counter value={x.value} suffix={x.suffix} />
              </div>
              <div className="mt-1 text-xs sm:text-sm md:text-base font-medium text-black/80">
                {x.label}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
