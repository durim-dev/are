import Image from "next/image";
import { FadeIn } from "../ui/fade-in";

export const Testimonials = () => {
  return (
    <section className="">
      <FadeIn className="flex flex-col md:flex-row gap-14">
        <Image
          alt="testimonials"
          src="/images/testimonials/testimonials-desktop.png"
          className="hidden lg:block"
          width={590}
          height={670}
        />

        <Image
          alt="testimonials"
          src="/images/testimonials/testimonials-tablet.png"
          className="hidden md:block lg:hidden"
          width={720}
          height={720}
        />

        <Image
          alt="testimonials"
          src="/images/testimonials/testimonials-mobile.png"
          className="md:hidden"
          width={430}
          height={343}
        />

        <div className="flex flex-col items-start justify-center gap-7">
          <p className="text-3xl md:text-[40px] font-medium font-serif">
            “I was skeptical, but Area has completely transformed the way I
            manage my business. The data visualizations are so clear and
            intuitive, and the platform is so easy to use. I can't imagine
            running my company without it.”
          </p>
          <div>
            <p className="font-sans">John Smith</p>
            <p className="font-mono text-primary">Head of Data</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
