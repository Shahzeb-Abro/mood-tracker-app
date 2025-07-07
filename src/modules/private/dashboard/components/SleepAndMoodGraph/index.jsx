import { getMoodBetweenDates } from "@/api/mood";
import {
  IconHappyWhite,
  IconNeutralWhite,
  IconSadWhite,
  IconVeryHappyWhite,
  IconVerySadWhite,
} from "@/assets/svgAssets";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
  CartesianGrid,
} from "recharts";
import {
  formatDate,
  getEndOfDay,
  getLast11Days,
  getSleepColor,
  getStartOfDay,
  sleepLabels,
} from "./components/helpers";
import {
  CustomTooltip,
  CustomXAxisTick,
  CustomYAxisTick,
  DateRange,
} from "./components";

export const MoodIcon = ({ mood }) => {
  const icons = {
    "Very Happy": <IconVeryHappyWhite />,
    Happy: <IconHappyWhite />,
    Neutral: <IconNeutralWhite />,
    Sad: <IconSadWhite />,
    "Very Sad": <IconVerySadWhite />,
  };

  return icons[mood];
};

export const MoodSleepChart = () => {
  const [startDate, setStartDate] = useState(
    getStartOfDay(new Date(new Date().setDate(new Date().getDate() - 10)))
  );

  const [endDate, setEndDate] = useState(getEndOfDay(new Date()));

  const { data } = useQuery({
    queryKey: ["mood-sleep-chart", startDate, endDate],
    queryFn: () => getMoodBetweenDates({ startDate, endDate }),
  });

  const moodData = data?.data || [];
  const modifiedMoodData = moodData.map((entry) => ({
    ...entry,
    date: formatDate(new Date(entry.createdAt)),
  }));

  // Merge moodData into full date range
  const generateChartData = () => {
    const last11Days = getLast11Days(endDate);
    return last11Days.map((dateStr) => {
      const match = modifiedMoodData.find((entry) => entry.date === dateStr);
      if (match) return match;
      return {
        date: dateStr,
        sleepValue: 0,
        tags: [],
        mood: "",
        sleepHours: "",
      }; // Empty bar
    });
  };

  const chartData = generateChartData();

  return (
    <div>
      <div className="flex items-center justify-between gap-4 flex-col lg:flex-row mb-8">
        <h3 className="text-preset-3-mobile lg:text-preset-3 text-neutral-900 ">
          Mood and sleep trends
        </h3>
        <DateRange
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>
      <div className="overflow-x-auto">
        <div
          style={{
            minWidth: `${chartData.length * 70}px`,
            height: 350,
          }}
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
            key={`${startDate}-${endDate}`}
          >
            <BarChart
              data={chartData}
              margin={{ top: 20, bottom: 40, left: 30 }}
              cursor={false}
            >
              <CartesianGrid
                stroke="#E0E6FA"
                style={{ opacity: 0.3 }}
                vertical={false}
              />

              <XAxis
                dataKey="date"
                type="category"
                tick={<CustomXAxisTick />}
                axisLine={false}
                tickLine={false}
                interval={0}
              />

              <YAxis
                type="number"
                domain={[0, sleepLabels.length]}
                ticks={[1, 2, 3, 4, 5]}
                interval={0}
                tick={({ x, y, payload }) => {
                  if (!sleepLabels[payload.value - 1]) return null;
                  return <CustomYAxisTick x={x} y={y} payload={payload} />;
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip content={<CustomTooltip />} />

              <Bar
                dataKey="sleepValue"
                radius={[40, 40, 0, 0]}
                barSize={40}
                cursor={false}
                // isAnimationActive={false}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={getSleepColor(entry.sleepHours)}
                  />
                ))}
                <LabelList
                  dataKey="sleepValue"
                  content={({ x, y, width, index }) => {
                    const entry = chartData[index];
                    if (!entry?.mood) return null;

                    const iconSize = 31;
                    const centerX = x + width / 2 - iconSize / 2;
                    const iconY = y - iconSize + 36;

                    return (
                      <foreignObject
                        x={centerX}
                        y={iconY}
                        width={iconSize}
                        height={iconSize}
                      >
                        <div
                          style={{
                            width: iconSize,
                            height: iconSize,
                            fontSize: iconSize,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <MoodIcon mood={entry.mood} />
                        </div>
                      </foreignObject>
                    );
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
