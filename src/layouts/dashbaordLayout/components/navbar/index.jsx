import { Logo } from "@/assets/svgAssets";
import { ProfilePopover } from "./components";
import { ModeToggle } from "@/components/theme/toggle";

export const Navbar = () => {
  return (
    <nav className="px-4 md:px-8 lg:px-10 py-10 max-w-[1440px] mx-auto flex items-center gap-4 justify-between">
      <Logo />

      <div className="flex items-center gap-4">
        <ModeToggle />

        <ProfilePopover />
      </div>
    </nav>
  );
};
