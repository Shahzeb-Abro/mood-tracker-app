import {
  IconTrendDecrease,
  IconTrendIncrease,
  IconTrendSame,
} from "@/assets/svgAssets";

const trendToText = {
  Same: {
    icon: <IconTrendSame />,
    text: "Same as the previous 5 check-ins",
  },
  Increasing: {
    icon: <IconTrendIncrease />,
    text: "Increase from the previous 5 check-ins",
  },
  Decreasing: {
    icon: <IconTrendDecrease />,
    text: "Decrease from the previous 5 check-ins",
  },
};

export const TrendToText = ({ trend, textStyles, iconStyles }) => {
  const trendDetails = trendToText[trend];
  return (
    <div className="flex items-center gap-2">
      <span className={`${iconStyles}`}>{trendDetails?.icon}</span>
      <span className={`text-preset-7 ${textStyles}`}>
        {trendDetails?.text}
      </span>
    </div>
  );
};
