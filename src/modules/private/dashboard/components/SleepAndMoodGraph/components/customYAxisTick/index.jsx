import { IconSleep } from "@/assets/svgAssets";
import { sleepLabels } from "../helpers";

export const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <foreignObject x={x - 75} y={y - 20} width={100} height={40}>
      <div className="text-[12px] text-center text-secondary-text font-medium">
        <div className="flex items-center gap-2 flex-col">
          <span>
            <IconSleep width={10} height={10} />
          </span>
          <span className="text-preset-9 text-secondary-text">
            {sleepLabels[payload.value - 1]}
          </span>
        </div>
      </div>
    </foreignObject>
  );
};
