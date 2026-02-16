"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "@/components/layout/constants/nav-links";
import { LearnMoreBtn } from "./learn-more-btn";
import { Logo } from "./logo";

export const DesktopHeader = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Triggering at 20px ensures the styles are gone
  //     // well before the user "lands" at scroll 0.
  //     setIsScrolled(window.scrollY > 300);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header className="flex justify-between items-center py-5 pb-20 w-full px-5 relative">
      <Logo />

      {/* Wrapper to preserve space in the flexbox */}
      <div className="flex-1 flex justify-center">
        <nav
          className={cn(
            "hidden md:flex items-center ",
            // "bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-10 py-4",
            // isScrolled
            //   ? "fixed top-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.03)]"
            //   : "relative top-0 left-0",
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
