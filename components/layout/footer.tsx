import Link from "next/link";
import { navLinks } from "./constants/nav-links";
import { Icons } from "../icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col gap-20 pt-10 pb-10 px-4 md:px-10 max-w-7xl mx-auto">
      <nav className="flex font-sans gap-7 font-bold text-sm md:text-lg">
        {navLinks
          .filter((link) => link.name !== "Contact Us")
          .map((link) => (
            <Link href={link.href} key={link.href}>
              {link.name}
            </Link>
          ))}
      </nav>

      <div className="flex items-baseline gap-10 font-mono text-primary">
        <Icons.union />
        <div className="flex gap-2 justify-between w-full text-xs md:text-sm">
          <p>© Area. {currentYear}</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};
