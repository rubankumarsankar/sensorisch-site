"use client";

import { motion } from "framer-motion";
import React from "react";

export default function SensorischWordLoader({
  word = "SENSORISCH",
  tagline = "Flavours & Fragrances Redefined",
  stagger = 0.12,
  baseDelay = 0.2,
  taglineDelay = 2.0,
  loopGlow = true,
  className = "",
}) {
  const letters = word.split("");
  const taglineLetters = tagline.split("");
  const lastSIndex = letters.lastIndexOf("S");

  return (
    <div className={`grid place-items-center w-full h-screen bg-white ${className}`}>
      <div className="relative flex flex-col items-center">
        {/* LINE 1: SENSORISCH */}
        <div className="flex items-end gap-[0.08em]">
          {letters.map((ch, i) => {
            const isLastS = i === lastSIndex && ch === "S";
            return (
              <motion.span
                key={`${ch}-${i}`}
                initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: baseDelay + i * stagger }}
                className={`relative inline-block text-4xl md:text-6xl font-extrabold tracking-[0.12em]
                  bg-gradient-to-br from-teal-500 via-amber-500 to-rose-500 bg-clip-text text-transparent`}
              >
                {/* underline sweep */}
                <motion.span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black/10"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: baseDelay + i * stagger + 0.2 }}
                  style={{ transformOrigin: "left" }}
                />
                {ch}

                {/* last 'S' pulse */}
                {isLastS && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-md"
                    animate={
                      loopGlow
                        ? {
                            scale: [1, 1.14, 1],
                            filter: [
                              "drop-shadow(0 0 0 rgba(0,0,0,0))",
                              "drop-shadow(0 8px 18px rgba(16,185,129,0.35))",
                              "drop-shadow(0 0 0 rgba(0,0,0,0))",
                            ],
                          }
                        : { scale: 1 }
                    }
                    transition={{
                      duration: 1.6,
                      repeat: loopGlow ? Infinity : 0,
                      repeatDelay: 0.4,
                      ease: "easeInOut",
                      delay: baseDelay + letters.length * stagger + 0.2,
                    }}
                  />
                )}
              </motion.span>
            );
          })}
        </div>

        {/* LINE 2: Tagline */}
        <div className="flex flex-wrap justify-center mt-5 text-sm md:text-lg font-medium text-gray-700">
          {taglineLetters.map((ch, i) => (
            <motion.span
              key={`tag-${i}`}
              initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: baseDelay + letters.length * stagger + taglineDelay + i * 0.04,
              }}
              className="inline-block"
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </div>

        {/* tiny progress dash */}
        <motion.div
          aria-hidden
          className="mx-auto mt-4 h-[3px] w-28 rounded-full bg-black/10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + letters.length * stagger }}
        >
          <motion.div
            className="h-full w-10 rounded-full bg-gradient-to-r from-teal-500 via-amber-500 to-rose-500"
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
