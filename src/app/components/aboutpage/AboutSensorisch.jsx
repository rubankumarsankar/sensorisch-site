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
              src="/our-story.png"
              alt="Sensorisch R&D and application lab"
              className="h-94 w-full object-cover"
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
                Sensorisch was founded with a simple belief: that great flavours
                are born from the perfect marriage of science and craft. We
                recognized that the industry needed a partner who could deliver
                not just exceptional taste profiles, but complete
                application-ready systems.
              </p>
              <p className="text-base leading-relaxed text-foreground/80">
                Today, we serve as a premium flavour and fragrance partner
                across India and the GCC, specializing in{" "}
                <span className="font-medium">Bakery</span>,{" "}
                <span className="font-medium">Beverages</span>,{" "}
                <span className="font-medium">Dairy</span>,{" "}
                <span className="font-medium">Confectionery</span>, and{" "}
                <span className="font-medium">Health &amp; Wellness</span>{" "}
                applications. Our <span className="font-semibold">Senso™</span>{" "}
                range represents the culmination of our expertise -
                application-ready systems that reduce time-to-market while
                ensuring consistent quality.
              </p>
            </motion.div>

            {/* Senso callout card */}
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-xl"
            >
              <a
                href="#solutions"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition"
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
