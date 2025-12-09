// app/components/IndustryResources.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

// Use images for icons
const CARDS = [
  {
    k: "Technical Guides",
    blurb:
      "Comprehensive guides on flavour applications, stability, and formulation best practices.",
    iconImg: "/icons/icon-r-1.png",
    cta: { label: "Access Guides", href: "/contact" },
    accent: "from-primary to-primary/50",
  },
  {
    k: "Market Reports",
    blurb:
      "Industry trends, consumer insights, and market analysis for strategic planning.",
    iconImg: "/icons/icon-r-2.png",
    cta: { label: "Download Reports", href: "/contact" },
    accent: "from-amber-500 to-rose-500",
  },
  {
    k: "Webinars",
    blurb:
      "Expert-led sessions on emerging trends, technologies, and application innovations.",
    iconImg: "/icons/icon-r-3.png",
    cta: { label: "View Schedule", href: "/contact" },
    accent: "from-emerald-500 to-sky-500",
  },
];

export default function IndustryResources({ items = CARDS }) {
  return (
    <section className="section-container py-15 relative">
      {/* header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="mt-3 section-title text-black">
          Industry <span className="text-primary">Resources</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 160 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-4 h-1  bg-black"
        />
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
        className="relative mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3 text-center"
      >
        {items.map((c) => (
          <motion.li
            key={c.k}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="group relative overflow-hidden bg-white/80 backdrop-blur p-8"
          >
            {/* Glow */}
            {/* <span
              aria-hidden
              className={`pointer-events-none absolute -top-14 -right-14 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${c.accent}`}
            /> */}

            {/* Icon on top */}
            <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ">
              <Image
                src={c.iconImg}
                alt={`${c.k} icon`}
                width={36}
                height={36}
                className="object-contain"
                priority
              />
              {/* <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ boxShadow: "inset 0 0 16px rgba(210,36,34,0.08)" }}
              /> */}
            </div>

            <h3 className="section-subtitle text-primary mb-2">{c.k}</h3>
            <p className="section-paragraph text-black/80 mb-5">{c.blurb}</p>

            {/* CTA */}
            <div>
              <Link
                              href={c.cta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition"
              >
                {c.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
