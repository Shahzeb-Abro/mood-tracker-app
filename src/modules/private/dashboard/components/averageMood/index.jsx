import {
  BgPatternAverages,
  IconHappyWhite,
  IconNeutralWhite,
  IconSadWhite,
  IconTrendSame,
  IconVeryHappyWhite,
  IconVerySadWhite,
} from "@/assets/svgAssets";
import { TrendToText } from "@/lib/TrendToText";

const options = [
  {
    id: 0,
    label: "Very Happy",
    styles: "bg-amber-300",
    icon: <IconVeryHappyWhite />,
  },
  {
    id: 1,
    label: "Happy",
    styles: "bg-green-300",
    icon: <IconHappyWhite />,
  },
  {
    id: 2,
    label: "Neutral",
    styles: "bg-sky-300",
    icon: <IconNeutralWhite />,
  },
  {
    id: 3,
    label: "Sad",
    styles: "bg-indigo-200",
    icon: <IconSadWhite />,
  },
  {
    id: 4,
    label: "Very Sad",
    styles: "bg-red-300",
    icon: <IconVerySadWhite />,
  },
];

export const AverageMood = ({ averageMood, moodTrend }) => {
  const avgMood = averageMood;

  const avgMoodDetails = options.filter(
    (option) => option.label === avgMood
  )[0];

  return (
    <div className="flex flex-col gap-3 ">
      <h4 className="text-preset-5 text-neutral-900">
        Average Mood{" "}
        <span className="text-preset-7 text-neutral-600">
          (Last 5 Check-ins)
        </span>
      </h4>

      <div
        className={`min-h-[150px] rounded-[20px] p-5 pr-16 relative w-full justify-center  text-neutral-900 overflow-hidden flex flex-col gap-3 ${
          avgMood === "" ? "bg-blue-100" : avgMoodDetails?.styles
        }`}
      >
        {avgMood === "" ? (
          <>
            <div className="text-preset-4-sb">Keep tracking!</div>
            <div className="text-preset-7">
              Log 5 check-ins to see your average mood.
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4 text-preset-4-sb">
              <span>{avgMoodDetails?.icon}</span>
              <span>{avgMoodDetails?.label}</span>
            </div>
            <TrendToText trend={moodTrend} />
          </>
        )}

        <div className="absolute -right-[180px] top-1/2 -translate-y-[calc(50%)]">
          <BgPatternAverages />
        </div>
      </div>
    </div>
  );
};
