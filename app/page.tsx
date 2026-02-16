import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-20 min-h-screen max-w-7xl mx-auto w-full px-4 pt-32 md:px-10 md:pt-0 ">
      <Hero />
      <TrustedBy />
    </main>
  );
}
