import {
  IconHappyColor,
  IconNeutralColor,
  IconSadColor,
  IconVeryHappyColor,
  IconVerySadColor,
} from "@/assets/svgAssets";

const popoverMoodToIcon = {
  "Very Happy": <IconVeryHappyColor width={16} height={16} />,
  Happy: <IconHappyColor width={16} height={16} />,
  Neutral: <IconNeutralColor width={16} height={16} />,
  Sad: <IconSadColor width={16} height={16} />,
  "Very Sad": <IconVerySadColor width={16} height={16} />,
};

export const CustomTooltip = ({ active, payload }) => {
  if (
    active &&
    payload &&
    payload.length &&
    payload[0].payload.sleepValue > 0
  ) {
    const entry = payload[0].payload;
    return (
      <div className="bg-white text-white p-3 rounded-[10px] shadow-popover max-w-[165px]  w-full flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="text-preset-8 font-semibold text-neutral-600">
            Mood
          </div>
          <div className="text-preset-7 text-neutral-900 flex items-center gap-1.5">
            <span>{popoverMoodToIcon[entry.mood]}</span> {entry.mood}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-preset-8 font-semibold text-neutral-600">
            Sleep
          </div>
          <div className="text-preset-7 text-neutral-900">
            {entry.sleepHours}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-preset-8 font-semibold text-neutral-600">
            Reflection
          </div>
          <div className="text-preset-9 text-neutral-900">
            {entry.reflection}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-preset-8 font-semibold text-neutral-600">
            Tags
          </div>
          <div className="text-preset-9 text-neutral-900">
            {entry.tags.join(", ")}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
