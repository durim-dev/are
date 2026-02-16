"use client";

import { motion } from "motion/react";
import Image from "next/image";

const logos = [
  "/images/trusted-by/logo-1.png",
  "/images/trusted-by/logo-2.png",
  "/images/trusted-by/logo-3.png",
  "/images/trusted-by/logo-4.png",
  "/images/trusted-by/logo-5.png",
  "/images/trusted-by/logo-6.png",
];

const MotionImage = motion(Image);

export const TrustedBy = () => {
  return (
    <section className="flex flex-col gap-10">
      <motion.p
        className="font-sans text-muted-foreground"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Trusted by:
      </motion.p>

      <div className="md:pl-16">
        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="w-24 md:w-32"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              <MotionImage
                src={logo}
                alt={`Company ${index + 1}`}
                width={110}
                height={42}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
