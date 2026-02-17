import { Benefits } from "@/components/sections/benefits";
import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Specifications } from "@/components/sections/specifications";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedBy } from "@/components/sections/trusted-by";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-32 min-h-screen max-w-7xl mx-auto w-full px-4 pt-32 md:px-10 md:pt-0 pb-20">
      <Hero />
      <TrustedBy />
      <hr />
      <Benefits />
      <Features />
      <hr />
      <Specifications />
      <hr className="md:hidden" />
      <Testimonials />
      <hr />
      <HowItWorks />
      <Cta />
    </main>
  );
}
