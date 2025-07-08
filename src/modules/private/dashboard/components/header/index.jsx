import { getMe } from "@/api/auth";
import { LogMoodModal } from "@/modals";
import { useQuery } from "@tanstack/react-query";

export const Header = ({ todaysMoodLogged }) => {
  const date = new Date();

  const formatted = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { data } = useQuery({
    queryFn: getMe,
    queryKey: ["me"],
  });

  const name = data?.user?.name;

  return (
    <header className="mt-12 flex flex-col gap-12">
      <div className="flex flex-col gap-4 md:gap-[10px] text-center">
        <h3 className="text-[24px] font-bold leading-[130%] md:!text-preset-3 text-blue-600 dark:text-blue-500 -tracking-[0.3px]">
          Hello, {name || "User"}!
        </h3>
        <h1 className="text-preset-1-mobile md:text-preset-1 text-primary-text">
          How are you feeling today?
        </h1>
        <p className="text-preset-6 text-secondary-text">{formatted}</p>
      </div>

      {!todaysMoodLogged && (
        <div className="flex w-full justify-center">
          <LogMoodModal />
        </div>
      )}
    </header>
  );
};
