// app/components/PressUpdates.jsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Megaphone, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

// Fallback data (swap with CMS/API)
const DEFAULT_ITEMS = [
  {
    id: "senso-pharma-expansion",
    title: "Sensorisch Expands Senso™ Range with New Pharmaceutical Solutions",
    tag: "Product Launch",
    date: "March 12, 2024",
    href: "/press/senso-pharma-expansion",
  },
  {
    id: "beverage-partnership",
    title:
      "Partnership Announcement: Sensorisch and Leading Beverage Manufacturer",
    tag: "Partnership",
    date: "February 25, 2024",
    href: "/press/beverage-partnership",
  },
  {
    id: "iso-22000",
    title: "Sensorisch Achieves ISO 22000 Certification for Quality Management",
    tag: "Certification",
    date: "February 10, 2024",
    href: "/press/iso-22000",
  },
  {
    id: "innovation-award-2024",
    title: "Award: Best Innovation in Natural Flavour Solutions 2024",
    tag: "Award",
    date: "January 30, 2024",
    href: "/press/innovation-award-2024",
  },
];

export default function PressUpdates({
  items = DEFAULT_ITEMS,
  showSubscribe = true,
}) {
  return (
    <section className="section-container">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-6xl"
      >
        <div className="text-center mx-auto max-w-3xl">
          <h2 className="mt-3 section-title text-black">
            Press <span className="text-primary">Updates</span>
          </h2>

          {/* underline stays centered via mx-auto */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="h-1 mt-4 rounded bg-gradient-to-r from-primary to-primary/60 mx-auto"
            aria-hidden
          />

          <p className="mt-2 section-paragraph text-black/70">
            Latest news and announcements from Sensorisch
          </p>
        </div>
      </motion.div>

      {/* List */}
      <motion.ul
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto mt-8 grid max-w-6xl gap-4"
      >
        {items.map((it) => (
          <motion.li
            key={it.id}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
            className="group relative overflow-hidden rounded-2xl px-5 py-4
                       bg-white/70 dark:bg-white/[0.06] backdrop-blur
                       ring-1 ring-black/5 dark:ring-white/10"
          >
            {/* glow + shimmer */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-10 h-28 w-28 rounded-full
                         bg-gradient-to-br from-primary to-primary/40 blur-3xl opacity-0 transition-opacity duration-300
                         group-hover:opacity-100"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/20
                         opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />

            <a href={it.href} className="block focus:outline-none">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/70">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-2.5 py-1 font-semibold ring-1 ring-primary/20">
                      {it.tag}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {it.date}
                    </span>
                  </div>
                  <h3 className="mt-1 section-subtitle">{it.title}</h3>
                </div>

                <span
                  className="mt-1 inline-flex items-center gap-2 self-start rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white
                                  hover:bg-primary/90 transition"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Subscribe CTA */}
      {showSubscribe && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-10 max-w-6xl"
        >
          <div
            className="relative overflow-hidden rounded-2xl p-6 md:p-8
                          bg-gradient-to-br from-primary/10 via-white/40 to-transparent
                          dark:from-primary/15 dark:via-white/[0.06] dark:to-transparent
                          ring-1 ring-black/5 dark:ring-white/10 backdrop-blur"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full
                         bg-gradient-to-br from-primary to-primary/50 blur-3xl opacity-50"
            />
            <div className="relative">
              <h3 className="section-subtitle">Stay Informed</h3>
              <p className="mt-1 section-paragraph max-w-2xl">
                Subscribe to our newsletter for the latest insights, trends, and
                updates from the world of flavours and fragrances.
              </p>

              <form
                className="mt-4 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks for subscribing!");
                }}
              >
                <label className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/60" />
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-black/10 dark:border-white/10
                               bg-white/70 dark:bg-white/5 backdrop-blur pl-10 pr-3 py-2.5
                               text-sm outline-none focus:ring-2 ring-primary/30"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5
                             text-sm font-semibold text-white hover:bg-primary/90 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
