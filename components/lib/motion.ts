import type { Variants } from "framer-motion";

export const EASE = [0.25, 0.46, 0.45, 0.94] as [
  number,
  number,
  number,
  number,
];

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 36 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};
