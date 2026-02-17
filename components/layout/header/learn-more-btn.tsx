import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const LearnMoreBtn = ({ className }: React.ComponentProps<"button">) => {
  return (
    <Button
      className={cn(
        "text-md md:text-sm flex items-center gap-0.5 group",
        className,
      )}
      asChild
      size="lg"
    >
      <Link href="https://durim-dev.vercel.app/" target="_blank">
        <span className="p-0">Learn More</span>
        <Icons.arrowRightUp
          size={12}
          className="size-2 p-0 transition-transform duration-300 group-hover:-translate-y-1 "
        />
      </Link>
    </Button>
  );
};
