// Helper to format dates as "Month dd"
export const formatDate = (date) =>
  date.toLocaleString("en-US", { month: "long", day: "2-digit" });

// Generate last 11 days (including endDate)
export const getLast11Days = (endDate) => {
  const dates = [];
  for (let i = 0; i < 11; i++) {
    const d = new Date(endDate);
    d.setDate(d.getDate() - i);
    dates.push(formatDate(d));
  }
  return dates.reverse(); // Show oldest first
};

export const getSleepColor = (hours) => {
  if (hours === "9+ hours") return "#ffc97c";
  if (hours === "7-8 hours") return "#89e780";
  if (hours === "5-6 hours") return "#89caff";
  if (hours === "3-4 hours") return "#b8b1ff";
  if (hours === "0-2 hours") return "#ff9b99";
};

export const getStartOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0); // Set to 12:00:00.000 AM
  return d;
};

export const getEndOfDay = (date) => {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999); // Set to 11:59:59.999 PM
  return d;
};

export const formatStartAndEndDate = (date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const sleepRangeOrder = {
  "0-2 hours": 1,
  "3-4 hours": 2,
  "5-6 hours": 3,
  "7-8 hours": 4,
  "9+ hours": 5,
};

export const sleepLabels = Object.keys(sleepRangeOrder);
