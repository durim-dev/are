"use client";
import { motion } from "motion/react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  className?: string;
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  scale = 0.95,
  className,
}: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
