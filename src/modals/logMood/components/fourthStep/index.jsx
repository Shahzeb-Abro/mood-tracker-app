import { RadioButton } from "@/components";

const options = [
  {
    id: 0,
    title: "9+ hours",
  },
  {
    id: 1,
    title: "7-8 hours",
  },
  {
    id: 2,
    title: "5-6 hours",
  },
  {
    id: 3,
    title: "3-4 hours",
  },
  {
    id: 4,
    title: "0-2 hours",
  },
];

export const FourthStep = ({ selectedSleepHours, setSelectedSleepHours }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-preset-3-mobile md:text-preset-3 text-primary-text">
          How many hours did you sleep last night?
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <RadioButton
            key={option.id}
            className="w-full"
            checked={selectedSleepHours === option.title}
            setChecked={(value) => setSelectedSleepHours(value)}
            label={option.title}
            value={option.title}
          />
        ))}
      </div>
    </div>
  );
};
