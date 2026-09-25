import React from "react";
import { motion } from "framer-motion";

const SectionReveal = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;