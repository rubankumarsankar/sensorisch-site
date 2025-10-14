// app/components/FormatsGrid.jsx
"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  Beaker,
  FlaskConical,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const DEFAULT_FORMATS = [
  { k: "Liquids",      blurb: "Easy dosing & mixing",  icon: Droplet },
  { k: "Powders",      blurb: "Extended shelf-life",   icon: Beaker },
  { k: "Emulsions",    blurb: "Superior stability",    icon: FlaskConical },
  { k: "Encapsulated", blurb: "Controlled release",    icon: BadgeCheck },
  { k: "Heat-Stable",  blurb: "Process resilient",     icon: Sparkles },
];

export default function FormatsGrid({ formats = DEFAULT_FORMATS }) {
  return (
    <section className="section-container py-12">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="section-title text-black tracking-tight">
          Available <span className="text-primary">Formats</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
        />
      </motion.div>

      {/* Grid */}
      <motion.ul
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        role="list"
        aria-label="Available formats"
      >
        {formats.map((f, i) => {
          const Icon = f.icon ?? Droplet;
          const tagLabel = f.tag === "E" ? "Encapsulated" : f.tag === "H" ? "Heat-Stable" : f.tag;

          return (
            <motion.li
              key={f.k}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10
                         bg-white/70 dark:bg-white/[0.06] backdrop-blur"
            >
              {/* animated gradient rail on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b
                           from-primary via-primary/70 to-primary/30 opacity-0 transition-opacity duration-300
                           group-hover:opacity-100"
              />

              {/* ambient glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full
                           bg-gradient-to-br from-primary to-primary/50 blur-3xl opacity-0
                           transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative p-4">
                <div className="flex items-start gap-3">
                  {/* icon disk with bob */}
                  <motion.span
                    aria-hidden
                    className="relative grid h-10 w-10 place-items-center rounded-xl
                               bg-primary/10 text-primary ring-1 ring-primary/20"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.06 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-xl"
                      style={{ boxShadow: "inset 0 0 14px rgba(210,36,34,0.10)" }}
                    />
                  </motion.span>

                  {/* text block */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold leading-none">{f.k}</h3>
                      {f.tag && (
                        <span
                          className="text-[10px] rounded bg-primary/10 px-1.5 py-0.5 ring-1 ring-primary/20"
                          aria-label={tagLabel}
                          title={tagLabel}
                        >
                          {f.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                      {f.blurb}
                    </p>

                    {/* underline grows on hover */}
                    <motion.i
                      initial={{ width: 0 }}
                      whileInView={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.35 }}
                      className="block h-[2px] w-0 mt-2 rounded bg-gradient-to-r from-primary to-primary/40 group-hover:w-full"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>

              {/* sheen sweep */}
              <motion.span
                aria-hidden
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-white/25"
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
