import { IconDropdownArrow } from "@/assets/svgAssets";
import { formatStartAndEndDate, getEndOfDay, getStartOfDay } from "../helpers";

export const DateRange = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const handleDateNext = () => {
    const newStart = new Date(startDate);
    newStart.setDate(newStart.getDate() + 11);
    const newEnd = new Date(endDate);
    newEnd.setDate(newEnd.getDate() + 11);

    setStartDate(getStartOfDay(newStart));
    setEndDate(getEndOfDay(newEnd));
  };

  const handleDatePrev = () => {
    const newStart = new Date(startDate);
    newStart.setDate(newStart.getDate() - 11);
    const newEnd = new Date(endDate);
    newEnd.setDate(newEnd.getDate() - 11);

    setStartDate(getStartOfDay(newStart));
    setEndDate(getEndOfDay(newEnd));
  };

  const handleToday = () => {
    const today = new Date();
    today.setDate(today.getDate());

    const newStart = new Date(today);
    newStart.setDate(newStart.getDate() - 10);

    setStartDate(getStartOfDay(newStart));
    setEndDate(getEndOfDay(today));
  };

  return (
    <div className="flex flex-col-reverse gap-3 lg:flex-row items-center font-semibold ">
      <button
        onClick={handleToday}
        className="px-3 py-2 text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-900/40 rounded-full text-preset-8"
      >
        Go to Today
      </button>
      <div className="flex items-center gap-2 text-neutral-600">
        <button
          onClick={handleDatePrev}
          className="rotate-90 opacity-75 flex items-center justify-center size-7 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-all"
        >
          <IconDropdownArrow width={16} height={16} />
        </button>
        <span className="text-preset-7 text-secondary-text font-semibold">
          {formatStartAndEndDate(startDate)} &ndash;{" "}
          {formatStartAndEndDate(endDate)}
        </span>
        <button
          onClick={handleDateNext}
          className="-rotate-90 opacity-75 flex items-center justify-center size-7 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-all"
        >
          <IconDropdownArrow width={16} height={16} />
        </button>
      </div>
    </div>
  );
};
