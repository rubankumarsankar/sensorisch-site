// app/components/BespokeProcessSection.jsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const STEPS = [
  {
    k: "01",
    title: "Brand Discovery",
    blurb:
      "Deep dive into your brand identity, target audience, and market positioning to understand your unique requirements.",
  },
  {
    k: "02",
    title: "Flavour Architecture",
    blurb:
      "Design exclusive taste profiles using sensory mapping and consumer insights to craft differentiated experiences.",
  },
  {
    k: "03",
    title: "Technical Optimization",
    blurb:
      "Engineer the ideal format and delivery system suited to your manufacturing process and product matrix.",
  },
  {
    k: "04",
    title: "Validation & Scale",
    blurb:
      "Rigorous testing, consumer validation, and seamless scale-up with complete documentation and technical support.",
  },
];

export default function BespokeProcessSection() {
  return (
    <section className="relative overflow-hidden selection">
      <div className="section-container my-5">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mt-4 section-title text-black"
          >
            {" "}
            Our <span className="text-primary">Bespoke Development</span>{" "}
            Process
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
            className="mt-3 section-paragraph"
          >
            A systematic approach that transforms your vision into market-ready
            flavour solutions
          </motion.p>
        </motion.div>

        {/* Curved path backdrop + tracer */}
        <div className="relative mt-14">
          {/* Steps: alternate left/right aligned under the path */}
          <ol className="relative z-10 mx-auto max-w-5xl">
            {STEPS.map((s, i) => (
              <StepRow
                key={s.k}
                index={i}
                k={s.k}
                title={s.title}
                blurb={s.blurb}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StepRow({ index, k, title, blurb }) {
  const leftSide = index % 2 === 0; // alternate

  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.06 }}
      className={`grid items-start md:grid-cols-2 gap-8 md:gap-12 mb-14 md:mb-20 ${
        leftSide ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      {/* number + title */}
      <div className={`text-${leftSide ? "right" : "left"}`}>
        <div
          className={`inline-flex items-baseline gap-3 ${
            leftSide ? "md:justify-end" : ""
          }`}
        >
          <span className="font-extrabold text-3xl md:text-5xl text-primary/90 tabular-nums">
            {k}
          </span>
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        </div>
        <div
          className={`mt-2 h-[2px] w-24 bg-gradient-to-r from-primary/70 to-transparent ${
            leftSide ? "ml-auto" : ""
          }`}
        />
      </div>

      {/* blurb (copy only - no cards) */}
      <p className="section-paragraph text-black/70 leading-relaxed">
        {blurb}
      </p>
    </motion.li>
  );
}
