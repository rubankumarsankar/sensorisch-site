"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <main className="bg-background text-foreground">
      {/* make the section relative so we can place the arrow at the bottom center */}
      <section className="section relative">
        <div className="section-container">
          <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
            {/* LEFT — copy (mobile second, desktop first) */}
            <div className="order-2 md:order-1">
              <h2 className="section-subtitle m-4 text-center">
                Flavours & Fragrances. Engineered for Impact.
              </h2>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="section-title text-black mb-4"
              >
                Make Everyday Products Feel{" "}
                <span className="text-primary">Extraordinary</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="section-paragraph max-w-xl mb-8"
              >
                Make everyday products feel extraordinary. Partner with us to
                create repeat-worthy taste and aroma through science-led
                innovation, application-ready systems, and rigorous execution
                that scales consistently.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#solutions"
                  className="px-8 py-3 rounded-sm bg-primary text-white font-semibold hover:bg-primary/90 transition"
                >
                  Explore Solutions
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-sm border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
                >
                  Request Samples
                </a>
              </motion.div>
            </div>

            {/* RIGHT — image banner (mobile first, desktop second / right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="order-1 md:order-2 relative w-full aspect-[5/4] md:aspect-[4/3] lg:h-[560px] lg:aspect-auto overflow-hidden border border-black/5 dark:border-white/10 shadow-sm rounded-sm lg:-mr-6"
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

        {/* ↓ Bottom-center animated scroll arrow */}
        <motion.a
          href="#why-sensorisch"
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
