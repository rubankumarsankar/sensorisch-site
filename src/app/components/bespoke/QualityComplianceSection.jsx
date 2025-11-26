// app/components/QualityComplianceSection.jsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2, FlaskConical, Timer } from "lucide-react";

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

export default function QualityComplianceSection() {
  return (
    <section className="relative overflow-hidden section-container">
      <div className="section-container py-10">
        {/* Header */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mt-4 section-title  text-black"
          >
            {" "}
            Quality &<span className="text-primary"> Compliance </span>{" "}
            Assurance 
            <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: 112 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                          className="mx-auto mt-6 h-1 rounded bg-black"
                        />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 section-paragraph text-black/70"
          >
            Every bespoke solution is backed by rigorous quality control,
            comprehensive documentation, and full regulatory compliance to
            ensure seamless market entry.
          </motion.p>

        </motion.div>

        {/* Feature rows */}
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3"
        >
          <Feature
            Icon={ShieldCheck}
            title="Global Standards"
            points={["FSSAI", "FDA", "EU compliance"]}
            accent="emerald"
          />
          <Feature
            Icon={FlaskConical}
            title="Rigorous Testing"
            points={["Stability studies", "Shelf-life validation"]}
            accent="violet"
          />
          <Feature
            Icon={Timer}
            title="Fast Turnaround"
            points={["Rapid prototyping", "Quick sampling"]}
            accent="amber"
          />
        </motion.ul>
      </div>
    </section>
  );
}

function Feature({ Icon, title, points, accent = "emerald" }) {
  // accent tokens per color
  const tokens = {
    emerald: {
      dot: "bg-emerald-500",
      ring: "ring-emerald-400/35",
      bar: "from-emerald-500 via-emerald-400 to-emerald-300",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-700",
      hover:
        "hover:bg-emerald-500/20 hover:shadow-[0_0_16px_rgba(16,185,129,0.35)]",
    },
    violet: {
      dot: "bg-violet-500",
      ring: "ring-violet-400/35",
      bar: "from-violet-500 via-violet-400 to-violet-300",
      badgeBg: "bg-violet-500/10",
      badgeText: "text-violet-700",
      hover:
        "hover:bg-violet-500/20 hover:shadow-[0_0_16px_rgba(139,92,246,0.35)]",
    },
    amber: {
      dot: "bg-amber-500",
      ring: "ring-amber-400/35",
      bar: "from-amber-500 via-amber-400 to-amber-300",
      badgeBg: "bg-amber-500/10",
      badgeText: "text-amber-700",
      hover:
        "hover:bg-amber-500/20 hover:shadow-[0_0_16px_rgba(245,158,11,0.35)]",
    },
  }[accent];

  return (
    <motion.li
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative overflow-hidden section-container rounded-2xl bg-white/60 dark:bg-white/[0.06] backdrop-blur p-5 md:p-6 ring-1 ${tokens.ring}`}
    >
      {/* left accent bar */}
      {/* <span
        aria-hidden
        className={`absolute left-0 top-0 h-full w-[3px] rounded-sm bg-gradient-to-b ${tokens.bar}`}
      /> */}
      {/* hover sheen */}
      {/* <motion.span
        aria-hidden
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/20"
      /> */}

      <div className="flex items-start gap-4">
        <span
          className={`grid place-items-center size-10 rounded-xl  ${tokens.badgeText} `}
        >
          <Icon className="h-8 w-8" />
        </span>
        <div className="min-w-0">
          <h3 className="section-subtitle">{title}</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-black/75">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className={`size-1.5 rounded-full ${tokens.dot}`} />
                <span className="truncate">{p}</span>
              </li>
            ))}
          </ul>
          {/* small CTA badge */}
          <motion.button
            className={`absolute bottom-3 right-4 mt-7 text-[11px] uppercase tracking-wider font-semibold rounded-full px-3 py-1.5 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${tokens.badgeBg} ${tokens.badgeText} ${tokens.hover} relative overflow-hidden`}
            whileHover={{ scale: 1.06 }}
          >
            <motion.span
              aria-hidden
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/25"
            />
            <span className="relative">View SOPs →</span>
          </motion.button>
        </div>
      </div>
    </motion.li>
  );
}
