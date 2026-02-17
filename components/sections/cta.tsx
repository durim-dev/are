import { LearnMoreBtn } from "../layout/header/learn-more-btn";
import { FadeIn } from "../ui/fade-in";

export const Cta = () => {
  return (
    <section
      className="md:p-20 flex items-center justify-center"
      id="contact-us"
    >
      <FadeIn className="flex flex-col items-center justify-center gap-10 max-w-3xl ">
        <p className="text-[50px] md:text-[54px] lg:text-6xl font-serif">
          Connect with us
        </p>
        <p className="font-sans text-muted-foreground">
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </p>

        <LearnMoreBtn className="w-full" />
      </FadeIn>
    </section>
  );
};
