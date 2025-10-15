// app/components/IndustryResources.jsx
"use client";

import { motion } from "framer-motion";
import { BookOpen, BarChart3, Video, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const CARDS = [
  {
    k: "Technical Guides",
    blurb:
      "Comprehensive guides on flavour applications, stability, and formulation best practices.",
    icon: BookOpen,
    cta: { label: "Access Guides", href: "/resources/guides" },
    accent: "from-primary to-primary/50",
  },
  {
    k: "Market Reports",
    blurb:
      "Industry trends, consumer insights, and market analysis for strategic planning.",
    icon: BarChart3,
    cta: { label: "Download Reports", href: "/resources/reports" },
    accent: "from-amber-500 to-rose-500",
  },
  {
    k: "Webinars",
    blurb:
      "Expert-led sessions on emerging trends, technologies, and application innovations.",
    icon: Video,
    cta: { label: "View Schedule", href: "/resources/webinars" },
    accent: "from-emerald-500 to-sky-500",
  },
];

export default function IndustryResources({ items = CARDS }) {
  return (
    <section className="section-container py-15">
      {/* header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className=" mt-3 section-title text-black">
          Industry <span className="text-primary">Resources</span>
          {/* accent underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 160 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          aria-hidden
        />
        </h2>
        <p className="mt-2 section-paragraph text-black/70">
          Access comprehensive guides, whitepapers, and technical documentation
        </p>

        
      </motion.div>

      {/* cards */}
      <motion.ul
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-3"
      >
        {items.map((c) => {
          const Icon = c.icon || BookOpen;
          return (
            <motion.li
              key={c.k}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
              className="group relative overflow-hidden rounded-2xl p-6 bg-white/70 dark:bg-white/[0.06] backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
            >
              {/* ambient glow */}
              <span
                aria-hidden
                className={`pointer-events-none absolute -top-14 -right-14 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${c.accent}`}
              />
              {/* shimmer sweep */}
              <motion.span
                aria-hidden
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/20"
              />

              <div className="flex items-start gap-3">
                {/* icon disk */}
                <span className="relative grid size-15 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary">
                  <Icon className="h-7 w-7" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-xl"
                    style={{ boxShadow: "inset 0 0 16px rgba(210,36,34,0.12)" }}
                  />
                </span>

                <div className="min-w-0">
                  <h3 className="section-subtitle">{c.k}</h3>
                  <p className="mt-1 section-paragraph">{c.blurb}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-5 flex justify-end">
                <a
                  href={c.cta.href}
                  className="relative inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition"
                >
                  {c.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
