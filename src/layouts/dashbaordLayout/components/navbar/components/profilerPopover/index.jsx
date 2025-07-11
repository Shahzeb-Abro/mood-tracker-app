import * as Popover from "@radix-ui/react-popover";

import {
  AvatarPlaceholder,
  IconDropdownArrow,
  IconLogout,
} from "@/assets/svgAssets";
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
          {user?.imgUrl ? (
            <img
              src={user?.imgUrl}
              alt={user?.name}
              className="size-10 rounded-full object-cover"
            />
          ) : (
            <AvatarPlaceholder width={40} height={40} />
          )}
          <IconDropdownArrow />
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={8}
          className="bg-white dark:bg-neutral-900 rounded-xl shadow-popover  w-[calc(100vw-32px)] ml-[16px] sm:ml-0 sm:w-[200px] p-4 z-50 focus:outline-none"
        >
          <div>
            <div className="flex flex-col">
              <h5 className="text-preset-6 text-primary-text">
                {user?.name || "User"}
              </h5>
              <p className="text-preset-7 text-tertiary-text">
                {user?.email || "user@mail.com"}
              </p>
            </div>
            <div className="w-full h-[1px] bg-blue-100 dark:bg-neutral-600/50 my-3"></div>

            <div className="flex flex-col gap-3 text-primary-text">
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
