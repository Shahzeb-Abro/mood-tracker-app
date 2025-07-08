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
        className={`text-preset-6 h-[150px]  py-3 px-4 rounded-[10px] border bg-white dark:bg-neutral-800  border-neutral-300 dark:border-neutral-700   placeholder:text-neutral-600 dark:placeholder:text-neutral-300 text-primary-text dark:focus:ring-offset-neutral-800 focus:outline-none focus:border-neutral-600 transition-all ${
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
        <p className="text-preset-8 text-secondary-text text-right">{helper}</p>
      )}
    </div>
  );
};
