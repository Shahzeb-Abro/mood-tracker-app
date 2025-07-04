import { IconReflection } from "@/assets/svgAssets";

export const Reflection = ({ reflection, tags }) => {
  return (
    <div className="p-5 md:py-6 flex flex-1 flex-col gap-4 md:px-5 lg:px-6 bg-white rounded-2xl border border-blue-100">
      <div className="flex items-center gap-3">
        <IconReflection width={22} height={22} />
        <span className="text-preset-6 text-neutral-600">
          Reflection of the day
        </span>
      </div>
      <div className="text-preset-6 text-neutral-900 flex-1">{reflection}</div>

      <div className="flex items-center gap-3 text-neutral-600 text-preset-6-i">
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
    </div>
  );
};
