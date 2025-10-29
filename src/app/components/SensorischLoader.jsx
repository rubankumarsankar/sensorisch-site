"use client";

import { motion } from "framer-motion";
import React from "react";

export default function SensorischLogoLoader({
  logoSrc = "/sensorisch-logo.png",      // 👉 set your logo path
  alt = "Brand logo",
  width = 200,                       // logo width (px)
  height = 400,                      // logo height (px)
  baseDelay = 0.2,                   // delay before fade-in starts
  revealDuration = 0.6,              // fade-in duration
  loopGlow = true,                   // pulsing glow around logo
  className = "",
}) {
  return (
    <div className={`grid place-items-center w-full h-screen bg-white ${className}`}>
      <div className="relative flex flex-col items-center">
        {/* LOGO: fade-in + slight rise */}
        <motion.img
          src={logoSrc}
          alt={alt}
          width={width}
          height={height}
          className="select-none"
          draggable={false}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: revealDuration, ease: "easeOut", delay: baseDelay }}
        />

        {/* Optional glow pulse around logo */}
        {loopGlow && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              width,
              height,
              borderRadius: 16,
            }}
            animate={{
              scale: [1, 1.08, 1],
              filter: [
                "drop-shadow(0 0 0 rgba(0,0,0,0))",
                "drop-shadow(0 10px 22px rgba(16,185,129,0.35))", // emerald-ish
                "drop-shadow(0 0 0 rgba(0,0,0,0))",
              ],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatDelay: 0.45,
              ease: "easeInOut",
              delay: baseDelay + revealDuration * 0.6,
            }}
          />
        )}

        {/* tiny progress dash */}
        <motion.div
          aria-hidden
          className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-black/10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + revealDuration * 0.6 }}
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
