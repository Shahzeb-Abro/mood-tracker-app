import { IconInfo } from "../../../assets/svgAssets";

export const Textbox = ({
  placeholder,
  error,
  registerProps = {},
  className,
  helper,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 pb-4">
      <textarea
        placeholder={placeholder}
        {...registerProps}
        {...props}
        className={`text-preset-6 h-[150px]  py-3 px-4 rounded-[10px] border bg-white border-neutral-300  placeholder:text-neutral-600 text-neutral-900 focus:outline-none focus:border-neutral-600 transition-all ${
          error
            ? "border-red-700"
            : "hover:border-neutral-600  focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 "
        } ${className}`}
      ></textarea>
      {error && (
        <div className="flex items-center gap-1.5 text-preset-9 text-red-700">
          <IconInfo />
          <span>{error}</span>
        </div>
      )}
      {helper && (
        <p className="text-preset-8 text-neutral-600 text-right">{helper}</p>
      )}
    </div>
  );
};
