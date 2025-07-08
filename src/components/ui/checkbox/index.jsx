export const Checkbox = ({
  label = "Tag",
  value,
  checked = false,
  setChecked,
}) => {
  return (
    <button
      type="button"
      onClick={() => setChecked(value)}
      className={`flex items-center gap-2 border-[2px] rounded-[10px] px-4 py-2.5 bg-white dark:bg-neutral-800 transition-colors duration-200 box-border focus:outline-none ${
        checked ? "border-blue-600" : "border-blue-100 dark:border-neutral-700"
      }`}
    >
      <span
        className={`flex items-center justify-center size-4 rounded-[4px] transition-all duration-200 ${
          checked
            ? "bg-blue-600"
            : "bg-white dark:bg-neutral-700 border-[2px] border-blue-100 dark:border-neutral-600"
        }`}
      >
        {checked && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10.5L9 14.5L15 7.5"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="text-preset-6 text-primary-text dark:text-neutral-0">
        {label}
      </span>
    </button>
  );
};
