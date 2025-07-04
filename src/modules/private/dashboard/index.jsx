import {
  AverageMood,
  AverageSleep,
  Header,
  MoodSleepChart,
} from "./components";
import { TodaysMood } from "./components/todaysMood";

export const Dashboard = () => {
  const todaysMoodLogged = false;
  return (
    <div className="px-4">
      <Header todaysMoodLogged={todaysMoodLogged} />

      <div className="max-w-[1170px] mx-auto mt-16 pb-20 flex flex-col gap-8">
        {todaysMoodLogged && <TodaysMood />}

        <div className="flex flex-col lg:flex-row  gap-8 ">
          <div className="flex-1 lg:w-full lg:flex-shrink-0 py-5 px-4 md:py-6 md:px-5 lg:px-6 bg-white rounded-2xl border border-blue-100 flex flex-col gap-6 lg:max-w-[370px]">
            <AverageMood />
            <AverageSleep />
          </div>
          <div className="flex-1 py-5 px-4 lg:p-8 bg-white rounded-2xl border border-blue-100">
            <MoodSleepChart />
          </div>
        </div>
      </div>
    </div>
  );
};
