import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

export const Header = () => {
  return (
    <>
      <div className="hidden md:flex">
        <DesktopHeader />
      </div>

      <div className="md:hidden">
        <MobileHeader />
      </div>
    </>
  );
};
