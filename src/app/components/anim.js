// app/components/anim.js
export const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: "easeOut" } },
};

export const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
