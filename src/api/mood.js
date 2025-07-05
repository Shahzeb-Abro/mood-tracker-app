import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}/moods`;

export const getMoodBetweenDates = async ({ startDate, endDate }) => {
  // If no dates provided, set end date to today and start date to 10 days ago
  if (!startDate && !endDate) {
    endDate = new Date();
    startDate = new Date();
    startDate.setDate(startDate.getDate() - 10);
  }

  console.log("Start Date", startDate);
  console.log("End Date", endDate);

  const response = await axios.get(`${baseUrl}/between-dates`, {
    params: { startDate, endDate },
  });
  return response.data;
};
