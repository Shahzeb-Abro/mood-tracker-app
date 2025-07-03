import {
  BgPatternAverages,
  IconSleep,
  IconTrendIncrease,
} from "@/assets/svgAssets";

const options = [
  {
    id: 0,
    label: "9+ hours",
    styles: "bg-amber-300",
  },
  {
    id: 1,
    label: "7-8 hours",
    styles: "bg-green-300",
  },
  {
    id: 2,
    label: "5-6 hours",
    styles: "bg-sky-300",
  },
  {
    id: 3,
    label: "3-4 hours",
    styles: "bg-indigo-200",
  },
  {
    id: 4,
    label: "0-2 hours",
    styles: "bg-red-300",
  },
];

export const AverageSleep = () => {
  const avgSleep = "5-6 hours";
  const avgSleepDetails = options.filter(
    (option) => option.label === avgSleep
  )[0];
  return (
    <div className="flex flex-col gap-3 ">
      <h4 className="text-preset-5 text-neutral-900">
        Average Sleep{" "}
        <span className="text-preset-7 text-neutral-600">
          (Last 5 Check-ins)
        </span>
      </h4>

      <div
        className={`min-h-[150px] rounded-[20px] p-5 pr-16 relative w-full justify-center  text-neutral-900 overflow-hidden flex flex-col gap-3 ${
          avgSleep === "" ? "bg-blue-100" : avgSleepDetails.styles
        }`}
      >
        {avgSleep === "" ? (
          <>
            <div className="text-preset-4-sb">Not enough data yet!</div>
            <div className="text-preset-7">
              Track 5 nights to view average sleep.
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4 text-preset-4-sb">
              <span>
                <IconSleep />
              </span>
              <span>{avgSleepDetails.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <IconTrendIncrease />
              <span className="text-preset-7">
                Increase from the previous 5 check-ins
              </span>
            </div>
          </>
        )}

        <div className="absolute -right-[180px] top-1/2 -translate-y-[calc(50%)]">
          <BgPatternAverages />
        </div>
      </div>
    </div>
  );
};
