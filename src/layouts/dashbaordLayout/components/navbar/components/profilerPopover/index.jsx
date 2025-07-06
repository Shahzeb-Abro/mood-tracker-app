import * as Popover from "@radix-ui/react-popover";

import profile from "../../../../../../assets/images/avatar-lisa.jpg";
import { IconDropdownArrow, IconLogout } from "@/assets/svgAssets";
import { SettingsModal } from "@/modals";
import { ROUTES } from "@/constants/routes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMe, logout } from "@/api/auth";
import { useNavigate } from "react-router-dom";

export const ProfilePopover = () => {
  const navigate = useNavigate();
  const { mutate: logoutUser } = useMutation({
    mutationFn: logout,
    onSuccess: (res) => {
      console.log("Res", res);
      navigate(ROUTES.LOGIN);
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });

  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  const user = data?.user;

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="flex items-center gap-2.5">
          <img
            src={user?.imgUrl || profile}
            alt={user?.name || "Profile picture"}
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
              <h5 className="text-preset-6 text-neutral-900">
                {user?.name || "User"}
              </h5>
              <p className="text-preset-7 text-neutral-300">
                {user?.email || "user@mail.com"}
              </p>
            </div>
            <div className="w-full h-[1px] bg-blue-100 my-3"></div>

            <div className="flex flex-col gap-3 text-neutral-900">
              <SettingsModal />
              <button
                onClick={() => logoutUser()}
                className="flex items-center gap-2.5 cursor-pointer border-none outline-none"
              >
                <IconLogout />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
