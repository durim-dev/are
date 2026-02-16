"use client";

import Image from "next/image";
import { motion } from "motion/react";

const MotionImage = motion(Image);

export const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center gap-14">
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-7xl md:text-[140px] lg:text-[150px] font-serif"
      >
        Browse everything.
      </motion.h1>

      <MotionImage
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="hidden lg:block"
        alt="hero"
        src="/images/hero/hero-desktop.png"
        width={1200}
        height={527}
        loading="lazy"
      />

      <MotionImage
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="hidden md:block lg:hidden"
        alt="hero"
        loading="lazy"
        src="/images/hero/hero-tablet.png"
        width={720}
        height={440}
      />

      <MotionImage
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="md:hidden"
        src="/images/hero/hero-mobile.png"
        alt="hero"
        loading="lazy"
        width={343}
        height={425}
      />
    </section>
  );
};
