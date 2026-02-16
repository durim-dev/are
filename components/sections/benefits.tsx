"use client";

import Image from "next/image";
import { Icons } from "../icons";
import { motion } from "motion/react";

const benefits = [
  {
    title: "Amplify Insights",
    description:
      "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
    icon: <Icons.cable className="size-6" />,
  },
  {
    title: "Control Your Global Presence",
    description:
      "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
    icon: <Icons.earth className="size-6" />,
  },
  {
    title: "Remove Language Barriers",
    description:
      "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
    icon: <Icons.account className="size-6" />,
  },
  {
    title: "Visualize Growth",
    description:
      "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
    icon: <Icons.chart className="size-6" />,
  },
];

const MotionImage = motion(Image);

export const Benefits = () => {
  return (
    <section className="flex flex-col gap-24">
      <div className="flex flex-col gap-12 md:gap-8">
        <h2 className="text-primary text-xs font-mono">Benefits</h2>
        <p className="text-5xl md:text-6xl font-serif">
          We've cracked the code.
        </p>
        <p className="text-lg text-sans text-muted-foreground">
          Area provides real insights, without the data overload.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col gap-6 border-t py-10"
          >
            <span className="size-6">{benefit.icon}</span>
            <h3 className="font-serif font-medium text-lg">{benefit.title}</h3>
            <p className="font-sans text-[15px] text-muted-foreground">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>

      <MotionImage
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        src="/images/benefits/benefits-desktop.png"
        className="hidden lg:block"
        alt="benefits-section"
        width={1200}
        height={620}
        loading="lazy"
      />

      <MotionImage
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        src="/images/benefits/benefits-tablet.png"
        className="hidden md:block lg:hidden"
        alt="benefits-section"
        width={1200}
        height={620}
        loading="lazy"
      />

      <MotionImage
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        src="/images/benefits/benefits-mobile.png"
        className="md:hidden"
        alt="benefits-section"
        width={1200}
        height={620}
        loading="lazy"
      />
    </section>
  );
};
