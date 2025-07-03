import { IconInfo } from "../../../assets/svgAssets";

export const Input = ({
  placeholder,
  error,
  registerProps = {},
  className,
  label,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-preset-6 mb-2 text-neutral-900">{label}</label>
      )}
      <input
        placeholder={placeholder}
        {...registerProps}
        {...props}
        className={`text-preset-6  py-3 px-4 rounded-[10px] border border-neutral-300  placeholder:text-neutral-600 text-neutral-900 focus:outline-none focus:border-neutral-600 transition-all ${
          error
            ? "border-red-700"
            : "hover:border-neutral-600  focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 "
        } ${className}`}
      />
      {error && (
        <div className="flex items-center gap-1.5 text-preset-9 text-red-700">
          <IconInfo />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
