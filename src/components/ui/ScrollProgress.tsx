import * as React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 200,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-linear-to-r from-gold via-[#eac280] to-gold origin-left z-100 pointer-events-none"
    />
  );
};
