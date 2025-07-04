import { IconSleep } from "@/assets/svgAssets";

export const Sleep = ({ sleep }) => {
  return (
    <div className="p-5 md:py-6 flex-1 flex flex-col gap-4 md:px-5 lg:px-6 bg-white rounded-2xl border border-blue-100">
      <div className="flex items-center gap-3">
        <IconSleep width={22} height={22} />
        <span className="text-preset-6 text-neutral-600">Sleep</span>
      </div>
      <div className="text-preset-3 text-neutral-900">{sleep}</div>
    </div>
  );
};
