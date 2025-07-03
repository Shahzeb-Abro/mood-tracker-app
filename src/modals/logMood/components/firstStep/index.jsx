import {
  IconHappyColor,
  IconNeutralColor,
  IconSadColor,
  IconVeryHappyColor,
  IconVerySadColor,
} from "@/assets/svgAssets";
import { RadioButton } from "@/components";

const options = [
  {
    id: 0,
    title: "Very Happy",
    icon: <IconVeryHappyColor width={38} height={38} />,
  },
  {
    id: 1,
    title: "Happy",
    icon: <IconHappyColor width={38} height={38} />,
  },
  {
    id: 2,
    title: "Neutral",
    icon: <IconNeutralColor width={38} height={38} />,
  },
  {
    id: 3,
    title: "Sad",
    icon: <IconSadColor width={38} height={38} />,
  },
  {
    id: 4,
    title: "Very Sad",
    icon: <IconVerySadColor width={38} height={38} />,
  },
];

export const FirstStep = ({ selectedMood, setSelectedMood }) => {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <RadioButton
          key={option.id}
          className="w-full"
          checked={selectedMood === option.title}
          setChecked={(value) => setSelectedMood(value)}
          label={
            <div className="w-full  flex items-center justify-between">
              <span>{option.title}</span>
              <span>{option.icon}</span>
            </div>
          }
          value={option.title}
        />
      ))}
    </div>
  );
};
