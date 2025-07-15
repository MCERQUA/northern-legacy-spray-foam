"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

interface PositionedLogoProps {
  className?: string;
}

export function PositionedLogo({ className }: PositionedLogoProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide logo when scrolling past 100px
    if (latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <motion.div
      className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 ${className}`}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 0.3
      }}
      initial={{ y: -20, opacity: 0 }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          delay: 0.5
        }}
        className="flex justify-center"
      >
        <img 
          src="/images/logos/NLSF-logo.png" 
          alt="Northern Legacy Spray Foam" 
          className="h-12 sm:h-14 md:h-16 w-auto opacity-70 hover:opacity-85 transition-opacity duration-300"
          style={{
            filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))"
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default PositionedLogo;
