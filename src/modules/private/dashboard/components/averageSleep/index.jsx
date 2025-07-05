import { BgPatternAverages, IconSleep } from "@/assets/svgAssets";
import { TrendToText } from "@/lib/TrendToText";

const options = [
  {
    id: 0,
    label: "9+ hours",
  },
  {
    id: 1,
    label: "7-8 hours",
  },
  {
    id: 2,
    label: "5-6 hours",
  },
  {
    id: 3,
    label: "3-4 hours",
  },
  {
    id: 4,
    label: "0-2 hours",
  },
];

export const AverageSleep = ({ averageSleep, sleepTrend }) => {
  const avgSleepDetails = options.filter(
    (option) => option.label === averageSleep
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
        className={`min-h-[150px] rounded-[20px] p-5 pr-16 relative w-full justify-center  text-white overflow-hidden flex flex-col gap-3 bg-blue-600`}
      >
        {!averageSleep ? (
          <>
            <div className="text-preset-4-sb">Not enough data yet!</div>
            <div className="text-preset-7">
              Track 5 nights to view average sleep.
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4 text-preset-4-sb">
              <span className="text-white/70">
                <IconSleep width={24} height={24} />
              </span>
              <span>{avgSleepDetails?.label}</span>
            </div>
            <TrendToText
              trend={sleepTrend}
              textStyles={"text-white/70"}
              iconStyles={"text-white/70"}
            />
          </>
        )}

        <div className="absolute -right-[180px] top-1/2 -translate-y-[calc(50%)]">
          <BgPatternAverages />
        </div>
      </div>
    </div>
  );
};
