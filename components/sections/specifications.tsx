import { DiscoverMoreBtn } from "../discover-more-btn";
import { Icons } from "../icons";
import { FadeIn } from "../ui/fade-in";

export const specs = [
  {
    title: "Area",
    items: [
      { name: "Ultra-fast browsing", included: true },
      { name: "Advanced AI insights", included: true },
      { name: "Seamless integration", included: true },
      { name: "Full UTF-8 support", included: true },
    ],
  },
  {
    title: "WebSurge",
    items: [
      { name: "Fast browsing", included: true },
      { name: "Basic AI recommendations", included: true },
      { name: "Restricts customization", included: false },
      { name: "Potential display errors", included: false },
    ],
  },
  {
    title: "HyperView",
    items: [
      { name: "Moderate speeds", included: true },
      { name: "No AI assistance", included: false },
      { name: "Steep learning curve", included: false },
      { name: "Partial UTF-8 support", included: true },
    ],
  },
];

export const Specifications = () => {
  return (
    <section>
      <FadeIn className="flex flex-col gap-32">
        <div className="flex flex-col gap-10 text-center">
          <h2 className="text-primary text-xs font-mono">Specs</h2>
          <p className="text-[50px] md:text-[54px] lg:text-6xl leading-14 font-serif">
            Why Choose Area?
          </p>
          <p className="text-sm font-sans text-muted-foreground">
            You need a solution that keeps up. That's why we developed Area. A
            developer-friendly approach to streamline your business.
          </p>
          <DiscoverMoreBtn />
        </div>

        <div className="container mx-auto text-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((pkg) => (
              <div key={pkg.title} className="bg-white p-6 border rounded-lg">
                <h3 className="text-2xl font-semibold mb-8 pb-4">
                  {pkg.title}
                </h3>
                <ul className="space-y-10 text-left">
                  {pkg.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2 border-b last:border-b-0 pb-10"
                    >
                      {item.included ? <Icons.check /> : <Icons.cross />}
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
