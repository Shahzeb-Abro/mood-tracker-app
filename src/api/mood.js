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
    withCredentials: true,
  });
  return response.data;
};

export const getTodaysMood = async () => {
  try {
    const response = await axios.get(`${baseUrl}/today`, {
      withCredentials: true,
    });
    console.log("Response", response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const logTodaysMood = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/`, body, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getAverageMoodAndSleepValue = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/average-mood-and-sleep-value`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
