import { useQuery } from "@tanstack/react-query";
import {
  AverageMood,
  AverageSleep,
  Header,
  MoodSleepChart,
} from "./components";
import { TodaysMood } from "./components/todaysMood";
import { getAverageMoodAndSleepValue, getTodaysMood } from "@/api/mood";

export const Dashboard = () => {
  const { data } = useQuery({
    queryKey: ["todays-mood"],
    queryFn: getTodaysMood,
  });

  const { data: averageMoodAndSleepValue } = useQuery({
    queryKey: ["average-mood-and-sleep-value"],
    queryFn: getAverageMoodAndSleepValue,
  });

  const todaysMood = data?.data.at(0);
  const todaysMoodLogged = !!todaysMood;

  const averageMood = averageMoodAndSleepValue?.data.averageMood;
  const averageSleep = averageMoodAndSleepValue?.data.averageSleepHours;
  const sleepTrend = averageMoodAndSleepValue?.data.sleepTrend;
  const moodTrend = averageMoodAndSleepValue?.data.moodTrend;

  return (
    <div className="px-4">
      <Header todaysMoodLogged={todaysMoodLogged} />

      <div className="max-w-[1170px] mx-auto mt-16 pb-20 flex flex-col gap-8">
        {todaysMoodLogged && <TodaysMood todaysMood={todaysMood} />}

        <div className="flex flex-col lg:flex-row  gap-8 ">
          <div className="flex-1 lg:w-full lg:flex-shrink-0 py-5 px-4 md:py-6 md:px-5 lg:px-6 bg-white dark:bg-neutral-900 rounded-2xl border border-blue-100 dark:border-blue-900 flex flex-col gap-6 lg:max-w-[370px]">
            <AverageMood averageMood={averageMood} moodTrend={moodTrend} />
            <AverageSleep averageSleep={averageSleep} sleepTrend={sleepTrend} />
          </div>
          <div className="flex-1 py-5 px-4 lg:p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-blue-100 dark:border-blue-900">
            <MoodSleepChart />
          </div>
        </div>
      </div>
    </div>
  );
};
