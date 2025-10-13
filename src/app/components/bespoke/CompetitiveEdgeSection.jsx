// app/components/CompetitiveEdgeSection.jsx
"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  FlaskConical,
  Sparkles,
  PackageCheck,
  Globe2,
  FileText,
  RotateCcw,
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
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const FEATURES = [
  {
    icon: ShieldCheck,
    label: "Exclusive IP ownership of your custom flavours",
  },
  {
    icon: Lock,
    label: "Protected formulations with non-disclosure agreements",
  },
  { icon: FlaskConical, label: "Dedicated R&D team for your projects" },
  { icon: Sparkles, label: "Priority access to new ingredient innovations" },
  { icon: PackageCheck, label: "Flexible minimum order quantities" },
  { icon: Globe2, label: "Global supply chain support" },
  { icon: FileText, label: "Comprehensive technical documentation" },
  { icon: RotateCcw, label: "Ongoing optimization and reformulation support" },
];

export default function CompetitiveEdgeSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container  py-5">
        {/* Header */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-8 md:gap-12 md:grid-cols-[1.1fr,1.2fr]"
        >
          {/* Left: title + blurb */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 section-title text-center text-black"
            >
              {" "}
              Your Competitive
              <span className="text-primary"> Edge </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-center text-sm md:text-base text-foreground/70"
            >
              With Sensorisch, your brand gets more than flavour - it gets a
              competitive advantage built on precision and trust
            </motion.p>
          </div>

          {/* Right: features grid */}
          <motion.ul
            variants={list}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {FEATURES.map((f, i) => (
              <FeatureItem key={f.label} i={i} Icon={f.icon} label={f.label} />
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureItem({ i, Icon, label }) {
  return (
    <motion.li
      variants={fadeUp}
      className="group relative overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-3"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
    >
      {/* animated accent on hover */}
      <motion.span
        aria-hidden
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/25"
      />
      {/* left accent bar */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-primary via-amber-400 to-rose-500"
      />

      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid place-items-center size-7 rounded-md bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="h-4 w-4" />
        </span>
        <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed">
          {label}
        </p>
      </div>
    </motion.li>
  );
}
