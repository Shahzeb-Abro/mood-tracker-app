export const RadioButton = ({ label = "Tag", checked = false, setChecked }) => {
  return (
    <button
      type="button"
      onClick={() => setChecked(true)}
      className={`flex items-center gap-2 border-[2px] rounded-[10px] px-4 py-2.5 bg-white transition-colors duration-200 box-border focus:outline-none ${
        checked ? "border-blue-600" : "border-blue-100"
      }`}
    >
      <span
        className={`flex items-center justify-center size-5 rounded-full  transition-all duration-200 ${
          checked
            ? " border-4 border-blue-600 bg-white"
            : "border-blue-100 bg-white border-[2px]"
        }`}
      ></span>
      <span className=" text-preset-6 text-neutral-900">{label}</span>
    </button>
  );
};
