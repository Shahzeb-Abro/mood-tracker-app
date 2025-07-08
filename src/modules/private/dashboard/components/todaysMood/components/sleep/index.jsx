import { IconSleep } from "@/assets/svgAssets";

export const Sleep = ({ sleep }) => {
  return (
    <div className="p-5 md:py-6 flex-1 flex flex-col gap-4 md:px-5 lg:px-6 bg-white dark:bg-neutral-900 rounded-2xl border border-blue-100 dark:border-neutral-600/50">
      <div className="flex items-center gap-3">
        <IconSleep width={22} height={22} />
        <span className="text-preset-6 text-secondary-text">Sleep</span>
      </div>
      <div className="text-preset-3 text-primary-text">{sleep}</div>
    </div>
  );
};
