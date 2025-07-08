import { IconReflection } from "@/assets/svgAssets";

export const Reflection = ({ reflection, tags }) => {
  return (
    <div className="p-5 md:py-6 flex flex-1 flex-col gap-4 md:px-5 lg:px-6 bg-white dark:bg-neutral-900 rounded-2xl border border-blue-100 dark:border-neutral-600/50">
      <div className="flex items-center gap-3">
        <IconReflection width={22} height={22} />
        <span className="text-preset-6 text-secondary-text">
          Reflection of the day
        </span>
      </div>
      <div className="text-preset-6 text-primary-text flex-1">{reflection}</div>

      <div className="flex items-center gap-3 text-secondary-text text-preset-6-i">
        {tags?.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
    </div>
  );
};
