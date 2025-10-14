// components/AnimatedCursor.jsx
"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** 🎨 Color palette (use CSS vars + brand-friendly hues) */
const PALETTE = [
  "var(--primary)",         // brand red
  "#FF7A00",                // orange
  "#EAB308",                // amber
  "#22C55E",                // emerald
  "#06B6D4",                // cyan
  "#3B82F6",                // blue
  "#A855F7",                // violet
  "#EC4899",                // pink
];

export default function AnimatedCursor({ cycleMs = 1600, enableCycle = true }) {
  // mouse position as motion values (for silky trailing)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // hover / text mode / click ripple
  const [hover, setHover] = useState(false);
  const [textMode, setTextMode] = useState(false);
  const [clickKey, setClickKey] = useState(0);

  // color cycling
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!enableCycle) return;
    const id = setInterval(() => setTick((t) => t + 1), cycleMs);
    return () => clearInterval(id);
  }, [cycleMs, enableCycle]);

  const colorFor = (offset = 0) =>
    PALETTE[(tick + offset + PALETTE.length * 1000) % PALETTE.length];

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const isInteractive = (t) =>
      t?.tagName === "A" ||
      t?.tagName === "BUTTON" ||
      t?.closest?.("a,button") ||
      t?.classList?.contains("cursor-hover");

    const isTextual = (t) =>
      t?.tagName === "INPUT" ||
      t?.tagName === "TEXTAREA" ||
      t?.isContentEditable;

    const over = (e) => {
      const t = e.target;
      setHover(!!isInteractive(t));
      setTextMode(!!isTextual(t));
    };
    const out = (e) => {
      const t = e.target;
      if (isInteractive(t)) setHover(false);
      if (isTextual(t)) setTextMode(false);
    };

    const down = () => setClickKey((k) => k + 1);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    window.addEventListener("mousedown", down);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      window.removeEventListener("mousedown", down);
    };
  }, [mx, my]);

  // trailing springs (progressively "looser" = more lag)
  const trailCfg = [
    { k: 500, d: 28, size: 10, op: 0.28 },
    { k: 380, d: 26, size: 12, op: 0.22 },
    { k: 270, d: 24, size: 14, op: 0.18 },
    { k: 190, d: 22, size: 16, op: 0.14 },
  ];
  const trail = trailCfg.map((cfg) => ({
    x: useSpring(mx, { stiffness: cfg.k, damping: cfg.d }),
    y: useSpring(my, { stiffness: cfg.k, damping: cfg.d }),
    ...cfg,
  }));

  // main ring springs (snappy)
  const ringX = useSpring(mx, { stiffness: 700, damping: 35 });
  const ringY = useSpring(my, { stiffness: 700, damping: 35 });

  // glow follower (softer)
  const glowX = useSpring(mx, { stiffness: 260, damping: 24 });
  const glowY = useSpring(my, { stiffness: 260, damping: 24 });

  const current = colorFor(0);

  return (
    <>
      {/* 🌫 Soft glow (uses current color) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: glowX, y: glowY }}
        animate={{ scale: hover ? 2.1 : 1.5, opacity: hover ? 0.55 : 0.35 }}
        transition={{ type: "spring", stiffness: 240, damping: 24 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 40,
            height: 40,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${current} 0%, transparent 70%)`,
            filter: "blur(10px)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>

      {/* 🟠 Trailing orbs (each with offset color) */}
      {trail.map(({ x, y, size, op }, i) => {
        const c = colorFor(i + 1);
        return (
          <motion.div
            key={i}
            className="fixed top-0 left-0 z-[9998] pointer-events-none"
            style={{ x, y }}
          >
            <span
              className="block rounded-full"
              style={{
                width: size,
                height: size,
                transform: "translate(-50%, -50%)",
                background: c,
                opacity: op,
                filter: "blur(1px)",
              }}
            />
          </motion.div>
        );
      })}

      {/* 🔵 Main ring */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hover ? 1.35 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div
          className="rounded-full border"
          style={{
            width: 22,
            height: 22,
            transform: "translate(-50%, -50%)",
            borderColor: current,
            boxShadow: hover ? `0 0 14px ${current}` : `0 0 6px ${current}`,
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "saturate(120%) blur(2px)",
          }}
        />
      </motion.div>

      {/* ⚪ Core (dot or I-beam) */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{ x: mx, y: my }}
        animate={{ scale: hover ? 0.85 : 1 }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      >
        {textMode ? (
          <span
            style={{
              width: 2,
              height: 16,
              transform: "translate(-50%, -50%)",
              background: current,
              boxShadow: `0 0 6px ${current}`,
              display: "block",
              borderRadius: 1,
            }}
          />
        ) : (
          <span
            className="rounded-full"
            style={{
              width: 6,
              height: 6,
              transform: "translate(-50%, -50%)",
              background: current,
              boxShadow: `0 0 6px ${current}`,
              display: "block",
            }}
          />
        )}
      </motion.div>

      {/* 💥 Click ripple (uses current color) */}
      <Ripple key={clickKey} x={mx} y={my} color={current} />
    </>
  );
}

function Ripple({ x, y, color }) {
  return (
    <motion.span
      className="fixed top-0 left-0 z-[9997] pointer-events-none rounded-full border"
      style={{
        x,
        y,
        width: 6,
        height: 6,
        transform: "translate(-50%, -50%)",
        borderColor: color,
        boxShadow: `0 0 10px ${color}`,
      }}
      initial={{ opacity: 0.45, scale: 0.4 }}
      animate={{ opacity: 0, scale: 6 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    />
  );
}
