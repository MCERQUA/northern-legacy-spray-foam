"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface PositionedLogoProps {
  className?: string;
}

export function PositionedLogo({ className }: PositionedLogoProps) {
  return (
    <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 ${className}`}>
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
    </div>
  );
}

export default PositionedLogo;
