import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

export const Header = () => {
  return (
    <>
      <div className="hidden md:flex px-3 md:px-10">
        <DesktopHeader />
      </div>

      <div className="md:hidden">
        <MobileHeader />
      </div>
    </>
  );
};
