import Image from "next/image";
import { DiscoverMoreBtn } from "../discover-more-btn";
import { FadeIn } from "../ui/fade-in";

export const how = [
  {
    title: "Get Started",
    description: "With our intuitive setup, you're up and running in minutes.",
  },
  {
    title: "Customize and Configure",
    description: "Adapt Area to your specific requirements and preferences.",
  },
  {
    title: "Grow Your Business",
    description: "Make informed decisions to exceed your goals.",
  },
];

export const HowItWorks = () => {
  return (
    <section>
      <FadeIn className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-start justify-between gap-10 md:items-start md:flex-row">
          <p className="text-5xl font-serif md:text-6xl">Map Your Success</p>
          <DiscoverMoreBtn />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {how.map((how, index) => (
            <div
              key={how.title}
              className="border-t flex flex-col py-14 gap-14"
            >
              <p className="text-[80px] text-muted-foreground font-sans">
                0{index + 1}
              </p>
              <div className="flex flex-col gap-5">
                <p className="font-serif text-lg">{how.title}</p>
                <p className="text-muted-foreground">{how.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Image
          alt="testimonials"
          src="/images/how-it-works/hiw-desktop.png"
          className="hidden lg:block rounded-xl"
          width={1200}
          height={665}
        />

        <Image
          alt="testimonials"
          src="/images/how-it-works/hiw-tablet.png"
          className="hidden md:block lg:hidden"
          width={720}
          height={665}
        />

        <Image
          alt="testimonials"
          src="/images/how-it-works/hiw-mobile.png"
          className="md:hidden "
          width={700}
          height={600}
        />
      </FadeIn>
    </section>
  );
};
