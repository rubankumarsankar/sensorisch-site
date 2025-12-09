// components/AboutSensorisch.jsx
"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const words = ["Our", "Story"];

export default function AboutSensorisch() {
  const cardRef = useRef(null);

  // ---- Scroll progress for the section (thin bar on top)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start 65%", "end 10%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });

  // ---- Parallax/tilt for image
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useTransform(my, [-60, 60], [6, -6]);
  const rotY = useTransform(mx, [-60, 60], [-6, 6]);
  const glow = useTransform(mx, [-60, 60], ["rgba(210,36,34,0.15)", "rgba(210,36,34,0.35)"]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - (rect.left + rect.width / 2));
    my.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <section id="our-story" className="relative bg-background">
      

      <div ref={cardRef} className="section-container">
        {/* Story + Image */}
        <div className="mt-12 md:mt-16 grid gap-8 md:grid-cols-2 items-start">
          {/* Left: Image / visual */}
          <motion.figure
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 shadow-xl"
          >
            {/* reveal mask sweep */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0 round 12px)", opacity: 0.6 }}
              whileInView={{
                clipPath: "inset(0 0% 0 0 round 12px)",
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
              viewport={{ once: true }}
              style={{
                transformStyle: "preserve-3d",
                rotateX: rotX,
                rotateY: rotY,
              }}
              className="relative"
            >
              <img
                src="/assets/our-story.png"
                alt="Sensorisch R&D and application lab"
                className="h-full w-full object-cover"
              />
              {/* soft inner glow following mouse */}
              {/* <motion.span
                style={{
                  background: glow,
                }}
                className="pointer-events-none absolute inset-0"
              /> */}
            </motion.div>

            {/* glossy top highlight */}
            <span className="pointer-events-none absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.figure>

          {/* Right: Copy */}
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="space-y-6"
          >
            {/* Title with word-by-word rise */}
            <motion.h2 className="section-title text-black flex flex-wrap gap-2">
              {words.map((w, i) => (
                <motion.span
                  key={w + i}
                  variants={fadeUp}
                  className={w === "Story" ? "text-primary" : ""}
                >
                  {w}
                </motion.span>
              ))}
            </motion.h2>

            {/* Accent bar grow */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="h-1 rounded bg-black"
            />

            {/* Paragraphs (staggered) */}
            <motion.p
              variants={fadeUp}
              className="section-paragraph leading-relaxed text-black/80"
            >
              sensorisch is a specialist b2b formulation house designed exclusively for the institutional food and beverage sector. our
              precision ingredients serve the bakery, confectionery, beverage, dairy, hospitality, and emerging nutraceutical industries,
              with a strict focus on performance, stability, and clean-label integrity. at the intersection of science and sensory delight,
              we craft flavours that don't just taste good they perform.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="section-paragraph leading-relaxed text-black/80"
            >
              we specialise in the research, development, and manufacture of advanced flavour systems tailored to a wide spectrum of
              applications, from bakery and beverages to pharmaceuticals and personal care. driven by innovation, supported by robust
              technical expertise, and aligned with global regulatory frameworks, our solutions are engineered to meet the highest standards
              of safety, stability, and sensory performance. with a focus on customisation, application-specific functionality, and
              clean-label compatibility, we partner with brands to translate consumer insights into flavourful experiences.
            </motion.p>

            {/* CTA with sheen */}
            <motion.div variants={fadeUp} className="mt-6">
              <Link
                href="/applications-solutions"
                className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow hover:bg-primary/90 transition active:scale-[0.99]"
              >
                <span>Explore Our Solutions</span>
                {/* sheen */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 hover:translate-x-full" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
