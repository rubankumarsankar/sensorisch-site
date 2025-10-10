"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function AboutSensorisch() {
  return (
    <section id="our-story" className="relative bg-background ">
      <div className="section-container">
        {/* Story + Image */}
        <div className="mt-12 md:mt-16 grid gap-8 md:grid-cols-2 items-start">
          {/* Left: Image / visual */}
          <motion.figure
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.01, rotateZ: -0.3 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden shadow-xl"
          >
            {/* Replace src with your asset */}
            <img
              src="/assets/our-story.png"
              alt="Sensorisch R&D and application lab"
              className="h-110 w-full object-cover"
            />
          </motion.figure>

          {/* Right: Copy */}
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold">Our Story</h2>
              <p className="text-base leading-relaxed text-foreground/80">
                sensorisch is a specialist b2b formulation house designed
                exclusively for the institutional food and beverage sector. our
                precision ingredients serve the bakery, confectionery, beverage,
                dairy, hospitality, and emerging nutraceutical industries, with
                a strict focus on performance, stability, and clean-label
                integrity. at the intersection of science and sensory delight,
                we craft flavours that don't just taste good they perform.
              </p>
              <p className="text-base leading-relaxed text-foreground/80">
                 we
                specialise in the research, development, and manufacture of
                advanced flavour systems tailored to a wide spectrum of
                applications, from bakery and beverages to pharmaceuticals and
                personal care. driven by innovation, supported by robust
                technical expertise, and aligned with global regulatory
                frameworks, our solutions are engineered to meet the highest
                standards of safety, stability, and sensory performance. with a
                focus on customisation, application-specific functionality, and
                clean-label compatibility, we partner with brands to translate
                consumer insights into flavourful experiences."
              </p>
            </motion.div>

            {/* Senso callout card */}
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-xl"
            >
              <a
                href="#solutions"
                className="inline-flex items-center rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition"
              >
                Explore Our Solutions
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
