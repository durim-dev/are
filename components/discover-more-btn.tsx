import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const DiscoverMoreBtn = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Button
        asChild
        className="bg-secondary text-foreground hover:bg-primary hover:text-background/80 py-6 px-6 font-sans"
      >
        <Link href={SITE_CONFIG.portfolioUrl} className="font-bold">
          Discover More
        </Link>
      </Button>
    </motion.div>
  );
};
