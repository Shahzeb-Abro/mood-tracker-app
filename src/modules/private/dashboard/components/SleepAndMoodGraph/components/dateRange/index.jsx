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

  return (
    <div className="flex items-center gap-2 text-neutral-600">
      <button
        onClick={handleDatePrev}
        className="rotate-90 opacity-75 flex items-center justify-center size-7 rounded-full hover:bg-blue-100 transition-all"
      >
        <IconDropdownArrow width={16} height={16} />
      </button>
      <span className="text-preset-7 text-neutral-600 font-semibold">
        {formatStartAndEndDate(startDate)} &ndash;{" "}
        {formatStartAndEndDate(endDate)}
      </span>
      <button
        onClick={handleDateNext}
        className="-rotate-90 opacity-75 flex items-center justify-center size-7 rounded-full hover:bg-bluee-100 transition-all"
      >
        <IconDropdownArrow width={16} height={16} />
      </button>
    </div>
  );
};
