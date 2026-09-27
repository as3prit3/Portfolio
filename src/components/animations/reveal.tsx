"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  desktopDelay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  distance = 24,
  once = true,
  amount = 0.2,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion
    ? {
        opacity: 0,
      }
    : {
        opacity: 0,
        x:
          direction === "left"
            ? distance
            : direction === "right"
              ? -distance
              : 0,
        y:
          direction === "up"
            ? distance
            : direction === "down"
              ? -distance
              : 0,
      };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
