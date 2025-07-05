import { useQuery } from "@tanstack/react-query";
import { Mood, Reflection, Sleep } from "./components";
import { getTodaysMood } from "@/api/mood";

export const TodaysMood = () => {
  const { data } = useQuery({
    queryKey: ["todays-mood"],
    queryFn: getTodaysMood,
  });

  const todaysMood = data?.data.at(0);
  return (
    <div className="flex flex-col lg:flex-row  gap-8 ">
      <div className="flex-1 py-5 px-4 lg:p-8 bg-white rounded-2xl border border-blue-100 overflow-hidden">
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
