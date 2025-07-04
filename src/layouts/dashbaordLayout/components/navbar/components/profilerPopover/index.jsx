import * as Popover from "@radix-ui/react-popover";
import { LogOut, Settings, User } from "lucide-react";

import profile from "../../../../../../assets/images/avatar-lisa.jpg";
import {
  IconDropdownArrow,
  IconLogout,
  IconSettings,
} from "@/assets/svgAssets";
import { SettingsModal } from "@/modals";

export const ProfilePopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="flex items-center gap-2.5">
          <img
            src={profile}
            alt="Lisa Profile"
            className="size-10 rounded-full"
          />
          <IconDropdownArrow />
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={8}
          className="bg-white rounded-xl shadow-popover  w-[calc(100vw-32px)] ml-[16px] sm:ml-0 sm:w-[200px] p-4 z-50 focus:outline-none"
        >
          <div>
            <div className="flex flex-col">
              <h5 className="text-preset-6 text-neutral-900">Lisa Maria</h5>
              <p className="text-preset-7 text-neutral-300">lisa@mail.com</p>
            </div>
            <div className="w-full h-[1px] bg-blue-100 my-3"></div>

            <div className="flex flex-col gap-3 text-neutral-900">
              <SettingsModal />
              <div className="flex items-center gap-2.5 cursor-pointer">
                <IconLogout />
                Logout
              </div>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
