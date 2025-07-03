import { LogMoodModal } from "@/modals";
import { AverageMood, AverageSleep, Header } from "./components";

export const Dashboard = () => {
  return (
    <div className="px-4">
      <Header />

      <div className="flex flex-col lg:flex-row max-w-[1170px] mx-auto gap-8 mt-16 pb-20">
        <div className="flex-1 py-5 px-4 md:py-6 md:px-5 lg:px-6 bg-white rounded-2xl border border-blue-100 flex flex-col gap-6 lg:max-w-[370px]">
          <AverageMood />
          <AverageSleep />
        </div>
        <div className="flex-1 py-5 px-4 bg-white rounded-2xl border border-blue-100">
          Graph
        </div>
      </div>
    </div>
  );
};
