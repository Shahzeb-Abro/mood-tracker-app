import {
  IconHappyColor,
  IconHappyWhite,
  IconNeutralColor,
  IconNeutralWhite,
  IconSadColor,
  IconSadWhite,
  IconSleep,
  IconVeryHappyColor,
  IconVeryHappyWhite,
  IconVerySadColor,
  IconVerySadWhite,
} from "@/assets/svgAssets";
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

const sleepRangeOrder = {
  "0-2 hours": 1,
  "3-4 hours": 2,
  "5-6 hours": 3,
  "7-8 hours": 4,
  "9+ hours": 5,
};

const sleepLabels = Object.keys(sleepRangeOrder);
console.log("Sleep Labels", sleepLabels);

const moodData = [
  {
    date: "June 27",
    mood: "😊",
    moodLabel: "Very Happy",
    sleepHours: "9+ hours",
    reflection: "Slept well and woke up ready to tackle new challenges.",
    tags: ["Joyful", "Excited", "Grateful"],
    sleepValue: sleepRangeOrder["9+ hours"],
  },
  {
    date: "July 02",
    mood: "😐",
    moodLabel: "Neutral",
    sleepHours: "5-6 hours",
    reflection: "Feeling okay, could use more sleep.",
    tags: ["Tired", "Calm"],
    sleepValue: sleepRangeOrder["5-6 hours"],
  },
  {
    date: "July 03",
    mood: "😐",
    moodLabel: "Sad",
    sleepHours: "3-4 hours",
    reflection: "Feeling sad, could use more sleep.",
    tags: ["Tired", "Calm"],
    sleepValue: sleepRangeOrder["3-4 hours"],
  },
  {
    date: "June 25",
    mood: "😐",
    moodLabel: "Very Happy",
    sleepHours: "0-2 hours",
    reflection: "It is my birthday today, I am really happy! Hurray!",
    tags: ["Tired", "Calm"],
    sleepValue: sleepRangeOrder["0-2 hours"],
  },
  // Add more data as needed
];

// Helper to format dates as "Month dd"
const formatDate = (date) =>
  date.toLocaleString("en-US", { month: "long", day: "2-digit" });

// Generate last 11 days (including today)
const getLast11Days = () => {
  const dates = [];
  for (let i = 0; i < 11; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(formatDate(d));
  }
  return dates.reverse(); // Show oldest first
};

// Merge moodData into full date range
const generateChartData = () => {
  const last11Days = getLast11Days();
  console.log("Last 11 Days", last11Days);
  return last11Days.map((dateStr) => {
    const match = moodData.find((entry) => entry.date === dateStr);
    if (match) return match;
    return { date: dateStr, sleepValue: 0, tags: [], mood: "", sleepHours: "" }; // Empty bar
  });
};

const chartData = generateChartData();

console.log(
  "Chart Data:",
  chartData.map((d) => d.date)
);

const getSleepColor = (hours) => {
  if (hours === "9+ hours") return "#ffc97c";
  if (hours === "7-8 hours") return "#89e780";
  if (hours === "5-6 hours") return "#89caff";
  if (hours === "3-4 hours") return "#b8b1ff";
  if (hours === "0-2 hours") return "#ff9b99";
};

const popoverMoodToIcon = {
  "Very Happy": <IconVeryHappyColor width={16} height={16} />,
  Happy: <IconHappyColor width={16} height={16} />,
  Neutral: <IconNeutralColor width={16} height={16} />,
  Sad: <IconSadColor width={16} height={16} />,
  "Very Sad": <IconVerySadColor width={16} height={16} />,
};

const CustomTooltip = ({ active, payload }) => {
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
            <span>{popoverMoodToIcon[entry.moodLabel]}</span> {entry.moodLabel}
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
          <div className="text-preset-7 text-neutral-900">
            {entry.reflection}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-preset-8 font-semibold text-neutral-600">
            Tags
          </div>
          <div className="text-preset-7 text-neutral-900">
            {entry.tags.join(", ")}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const MoodIcon = ({ mood }) => {
  const icons = {
    "Very Happy": <IconVeryHappyWhite />,
    Happy: <IconHappyWhite />,
    Neutral: <IconNeutralWhite />,
    Sad: <IconSadWhite />,
    "Very Sad": <IconVerySadWhite />,
  };

  return <div>{icons[mood] || "❓"}</div>;
};

const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <foreignObject x={x - 24} y={y} width={50} height={40}>
      <div
        style={{
          fontSize: "12px",
          textAlign: "center",
          color: "#888",
          fontWeight: 500,
        }}
      >
        <div className="flex flex-col gap-1.5 text-center text-neutral-900">
          <span className="text-preset-9">
            {payload.value.split(" ").at(0)}
          </span>
          <span className="text-preset-8 font-semibold">
            {payload.value.split(" ").at(1)}
          </span>
        </div>
      </div>
    </foreignObject>
  );
};

const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <foreignObject x={x - 75} y={y - 20} width={100} height={40}>
      <div
        style={{
          fontSize: "12px",
          textAlign: "center",
          color: "#888",
          fontWeight: 500,
        }}
      >
        <div className="flex items-center gap-2 flex-col">
          <span>
            <IconSleep width={10} height={10} />
          </span>
          <span className="text-preset-9 text-neutral-600">
            {sleepLabels[payload.value - 1]}
          </span>
        </div>
      </div>
    </foreignObject>
  );
};

export const MoodSleepChart = () => {
  return (
    <div>
      <h3 className="text-preset-3-mobile lg:text-preset-3 text-neutral-900 mb-8">
        Mood and sleep trends
      </h3>
      <div className="overflow-x-auto">
        <div
          style={{
            minWidth: `${chartData.length * 70}px`,
            height: 350,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
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
                    if (!entry?.moodLabel) return null;

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
                            pointerEvents: "none",
                          }}
                        >
                          <MoodIcon mood={entry.moodLabel} />
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
