// app/components/BriefToScale.tsx
"use client";

import { motion } from "framer-motion";

export default function BriefToScale() {
  const steps = [
    { n: 1, title: "Discover", desc: "Market scan & sensory mapping" },
    { n: 2, title: "Design", desc: "Iterative creation with constraints" },
    { n: 3, title: "Validate", desc: "Testing & consumer validation" },
    { n: 4, title: "Scale", desc: "QA/QC & production ready" },
  ];

  // animation presets
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <section className="section">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="section-title text-primary">From Brief to Scale</h2>
          <p className="section-subtitle">
            We align targets, prototype fast, validate in your matrix, then transfer SOPs for reliable production
          </p>
        </motion.div>

        {/* Left (image) | Right (content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* LEFT: Image block */}
          <motion.figure
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, rotateZ: -0.4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="order-1 md:order-none overflow-hidden shadow-xl rounded-2xl"
          >
            <img
              src="/home-banner-3.png" // <- replace with your asset
              alt="Cheese stack"
              className="w-full h-full object-cover"
            />
          </motion.figure>

          {/* RIGHT: Timeline */}
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex items-start md:ml-4 lg:ml-20 lg:mt-15"
          >
            {/* vertical dashed rail */}
            <div className="absolute left-4 top-2 bottom-2 border-l-2 border-dashed border-gray-300" />
            {/* animated progress fill */}
            <motion.div
              className="absolute left-[14px] top-2 bottom-2 w-[4px] rounded bg-primary/20 overflow-hidden"
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 0.5rem)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}
            >
              <motion.span
                className="absolute left-0 top-0 w-full bg-primary"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}
              />
            </motion.div>

            <ol className="w-full space-y-10 md:space-y-12">
              {steps.map((s) => (
                <motion.li key={s.n} variants={fadeUp} className="relative pl-16">
                  {/* number badge (spring pop) */}
                  <motion.div
                    className="absolute left-0 top-0"
                    initial={{ scale: 0.6, opacity: 0, y: 8 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  >
                    <div className="h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center font-semibold shadow ring-4 ring-white">
                      {s.n}
                    </div>
                  </motion.div>

                  {/* text block */}
                  <div className="space-y-1">
                    <h3 className="text-4xl section-title">{s.title}</h3>
                    <p className="section-subtitle">{s.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
