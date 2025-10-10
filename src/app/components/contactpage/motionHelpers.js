// app/components/contact/motionHelpers.js
export const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
