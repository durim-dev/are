"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { DiscoverMoreBtn } from "../discover-more-btn";

const features = [
  {
    description: "Spot Trends in Seconds: No more digging through numbers.",
  },
  {
    description:
      "Get Everyone on the Same Page: Share easy-to-understand reports with your team.",
  },
  {
    description:
      "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
  },
  {
    description:
      "Your Global Snapshot: Get a quick, clear overview of your entire operation.",
  },
];

const MotionImage = motion(Image);

export const Features = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-20 lg:gap-5 py-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <motion.h2
            className="text-[50px] md:text-[54px] lg:text-6xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See the Big Picture
          </motion.h2>

          <motion.h3
            className="font-sans text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Area turns your data into clear, vibrant visuals that show you
            exactly what's happening in each region.
          </motion.h3>
        </div>

        <div>
          <motion.div
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-5 py-8 border-t-2 last:border-b-0 border-text-muted-foreground"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-sans text-muted-foreground font-bold self-start">
                  0{index + 1}
                </p>
                <h3 className="text-xl ">{feature.description}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <DiscoverMoreBtn />
      </div>

      <MotionImage
        alt="features"
        className="hidden lg:block"
        src="/images/features/features-desktop.png"
        height={711}
        width={590}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      />

      <MotionImage
        alt="features"
        className="hidden md:block lg:hidden"
        src="/images/features/features-desktop.png"
        height={744}
        width={720}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      />

      <MotionImage
        alt="features"
        className="md:hidden self-center"
        src="/images/features/features-desktop.png"
        height={311}
        width={386}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
};
