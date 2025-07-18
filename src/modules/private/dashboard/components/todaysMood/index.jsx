import { Mood, Reflection, Sleep } from "./components";

export const TodaysMood = ({ todaysMood }) => {
  return (
    <div className="flex flex-col lg:flex-row  gap-8 ">
      <div className="flex-1 py-5 px-4 lg:p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-blue-100 dark:border-neutral-600/50 overflow-hidden">
        <Mood mood={todaysMood?.mood} />
      </div>
      <div className="flex-1 lg:w-full lg:flex-shrink-0  flex flex-col gap-5 lg:max-w-[470px]">
        <Sleep sleep={todaysMood?.sleepHours} />
        <Reflection
          tags={todaysMood?.tags}
          reflection={todaysMood?.reflection}
        />
      </div>
    </div>
  );
};
