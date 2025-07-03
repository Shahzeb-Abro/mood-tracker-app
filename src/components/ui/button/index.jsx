export const Button = ({
  variant = "primary",
  label = "",
  className,
  ...props
}) => {
  const variants = {
    primary:
      "text-preset-7 font-medium py-3 px-8 rounded-[10px] bg-blue-600 text-neutral-0 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 transition-all",
    secondary:
      "text-preset-7 text-neutral-900 px-4 py-2 rounded-[8px] border border-neutral-300 hover:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 transition-all",
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {label}
    </button>
  );
};
