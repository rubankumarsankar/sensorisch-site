"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <main className="bg-background text-foreground">
      <section className="section relative">
        <div className="section-container">
          <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
            {/* LEFT  -  copy (mobile FIRST, desktop LEFT) */}
            <div className="order-1 md:order-1">
              <h2 className="section-subtitle text-primary mb-5 text-center">
                About Sensorisch
              </h2>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="section-title text-black mb-4"
              >
                Science-Led Innovation Meets {" "}
                <span className="text-primary">Culinary Craft</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="section-paragraph max-w-xl mb-8"
              >
                We blend rigorous R&D with culinary artistry to create
                end-to-end taste and aroma experiences that make everyday
                products extraordinary.
              </motion.p>
            </div>

            {/* RIGHT  -  image (mobile SECOND, desktop RIGHT) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="order-2 md:order-2 relative w-full
             aspect-[5/4] md:aspect-[4/3] lg:h-[560px] lg:aspect-auto
             overflow-hidden border border-black/5 dark:border-white/10
             shadow-sm rounded-sm lg:-mr-6"
            >
              <Image
                src="/hero-banner.png"
                alt="Sensorisch flavour & fragrance lab banner"
                fill
                priority
                sizes="(min-width:1024px) 60vw, (min-width:768px) 50vw, 100vw"
                className="object-cover object-right"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom-center animated scroll arrow */}
        <motion.a
          href="#our-story"
          aria-label="Scroll to next section"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="group absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-10"
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex h-20 w-12 items-center justify-center rounded-full
               bg-white/80 dark:bg-white/10 backdrop-blur
               border-2 border-dotted border-primary/50
               shadow-sm ring-0 group-hover:ring-4 ring-primary/20 transition"
          >
            <FaArrowDownLong
              className="h-8 w-5 text-primary"
              aria-hidden="true"
            />
          </motion.span>
        </motion.a>
      </section>
    </main>
  );
}
