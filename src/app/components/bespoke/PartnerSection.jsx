// app/components/PartnerSection.jsx
"use client";

import { motion } from "framer-motion";
import {
  Beaker,
  Sparkles,
  Factory,
  Globe2,
  ShieldCheck,
  Leaf,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function PartnerSection() {
  return (
    <section id="bespoke" className="relative section-container overflow-hidden">
      <div className="section-container py-14 md:py-20">
        {/* Header */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mt-4 section-title text-black"
          >
            <span className="text-primary"> We Partner</span> With You To
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mx-auto mt-6 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
            />
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-3 section-paragraph ">
            Deliver precision-crafted solutions that give your brand a
            competitive edge  -  built on trust and innovation.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <FeatureCard
            icon={<Sparkles className="h-6 w-6" />}
            title="Exclusive Flavour Development"
            blurb="Create distinctive taste profiles that set your products apart and build brand loyalty."
            accent="from-amber-500/20 to-rose-500/20"
          />

          <FeatureCard
            icon={<Factory className="h-6 w-6" />}
            title="Manufacturing Flexibility"
            blurb="Liquid, powder, water-soluble, or oil-soluble formats tailored to your production needs."
            accent="from-blue-500/20 to-cyan-500/20"
          />

          <FeatureCard
            icon={<Globe2 className="h-6 w-6" />}
            title="Global Compliance"
            blurb="Navigate FSSAI and international regulations with confidence across all markets."
            accent="from-emerald-500/20 to-teal-500/20"
          />

          <FeatureCard
            icon={<Leaf className="h-6 w-6" />}
            title="Clean-Label Integration"
            blurb="Meet conscious consumer demand with natural, clean-label ingredient solutions."
            accent="from-violet-500/20 to-fuchsia-500/20"
          />
        </motion.ul>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, blurb, accent }) {
  return (
    <motion.li
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/[0.06] backdrop-blur p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg"
    >
      {/* accent glow (decorative) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-12 -right-[20%] h-36 w-36 rounded-full bg-gradient-to-br ${accent} blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      {/* icon */}
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
        {icon}
      </div>

      {/* title */}
      <h3 className="mt-3 section-subtitle text-primary">{title}</h3>

      {/* blurb */}
      <p className="mt-2 section-paragraph">{blurb}</p>
    </motion.li>
  );
}
