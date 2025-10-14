"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const t = e.target;
      if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.classList.contains("cursor-hover")
      ) setHover(true);
    };
    const onOut = (e) => {
      const t = e.target;
      if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.classList.contains("cursor-hover")
      ) setHover(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      {/* 🟣 Outer ring with glow */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hover ? 2.2 : 1,
          opacity: hover ? 0.6 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <div
          className="h-10 w-10 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            filter: hover
              ? "blur(12px) brightness(1.5)"
              : "blur(8px) brightness(1)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>

      {/* 🔴 Middle ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x - 12,
          y: pos.y - 12,
          scale: hover ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div
          className="h-6 w-6 rounded-full border border-[var(--primary)]"
          style={{
            boxShadow: hover
              ? "0 0 12px var(--primary)"
              : "0 0 4px var(--primary-light)",
          }}
        />
      </motion.div>

      {/* 🔘 Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: hover ? 0.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 35 }}
      >
        <div
          className="h-2 w-2 rounded-full bg-[var(--primary)]"
          style={{
            boxShadow: "0 0 6px var(--primary-light)",
          }}
        />
      </motion.div>
    </>
  );
}
