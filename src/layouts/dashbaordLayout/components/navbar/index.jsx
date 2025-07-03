import { IconDropdownArrow, Logo } from "@/assets/svgAssets";
import profile from "../../../../assets/images/avatar-lisa.jpg";

export const Navbar = () => {
  return (
    <nav className="px-4 md:px-8 lg:px-10 py-10 max-w-[1440px] mx-auto flex items-center gap-4 justify-between">
      <Logo />

      <div className="flex items-center gap-2.5">
        <img
          src={profile}
          alt="Lisa Profile"
          className="size-10 rounded-full"
        />
        <IconDropdownArrow />
      </div>
    </nav>
  );
};
