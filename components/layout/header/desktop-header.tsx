"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "@/components/layout/constants/nav-links";
import { LearnMoreBtn } from "./learn-more-btn";
import { Logo } from "./logo";
import { useEffect, useState } from "react";

export const DesktopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex justify-between items-center py-5 pb-20 w-full px-5 relative">
      <Logo />

      <div className="flex-1 flex justify-center">
        <nav
          className={cn(
            "hidden md:flex items-center transition-all duration-300 ease-in-out",
            "fixed left-1/2 -translate-x-1/2 z-50",
            isScrolled
              ? "top-6 scale-100 opacity-100 bg-white/5 backdrop-blur-2xl py-4 px-10 border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.03)]"
              : "top-0 scale-95 opacity-90 bg-transparent py-6 px-0 border border-transparent shadow-none",
          )}
        >
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold font-sans hover:text-foreground/50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <LearnMoreBtn />
    </header>
  );
};
