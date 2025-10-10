// app/components/SplashLoader.jsx
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SensorischSLoader from "./SensorischLoader";

export default function SplashLoader({ ms = 1200 }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), ms);
    return () => clearTimeout(t);
  }, [ms]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <SensorischSLoader size={120} stroke={10} speed={3} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
