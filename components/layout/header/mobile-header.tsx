"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./nav-links";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Logo } from "./logo";
import { LearnMoreBtn } from "./learn-more-btn";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-screen z-50 py-6 px-5 bg-background",
        isOpen
          ? "shadow-none rounded-none duration-0"
          : "shadow rounded-sm duration-300 delay-300",
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />

        <Button
          variant="ghost"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="px-0!"
        >
          {!isOpen ? (
            <Icons.menuIcon className="size-6 p-0 m-0" />
          ) : (
            <Icons.cross className="size-6" />
          )}
        </Button>
      </div>

      <nav
        className={cn(
          "absolute left-0 overflow-hidden w-full transition-all duration-300 ease-in bg-background shadow-bottom",
          isOpen
            ? "max-h-fit opacity-100 rounded-b-sm pt-20"
            : "max-h-fit opacity-0",
        )}
      >
        <div className="flex flex-col gap-4 px-4 pb-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold font-sans hover:text-foreground/50 transition-colors duration-200 py-7",
                "first:border-t",
                index !== navLinks.length - 1 ? "border-b" : "border-b-0 mb-12",
              )}
            >
              {link.name}
            </Link>
          ))}

          <LearnMoreBtn />
        </div>
      </nav>
    </header>
  );
};
