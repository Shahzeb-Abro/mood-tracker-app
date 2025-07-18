import {
  IconHappyColor,
  IconNeutralColor,
  IconQuote,
  IconSadColor,
  IconVeryHappyColor,
  IconVerySadColor,
} from "@/assets/svgAssets";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Mood = ({ mood }) => {
  const moodToIcon = {
    "Very Happy": {
      sm: <IconVeryHappyColor width={200} height={200} />,
      lg: <IconVeryHappyColor width={320} height={320} />,
    },
    Happy: {
      sm: <IconHappyColor width={200} height={200} />,
      lg: <IconHappyColor width={320} height={320} />,
    },
    Neutral: {
      sm: <IconNeutralColor width={200} height={200} />,
      lg: <IconNeutralColor width={320} height={320} />,
    },
    Sad: {
      sm: <IconSadColor width={200} height={200} />,
      lg: <IconSadColor width={320} height={320} />,
    },
    "Very Sad": {
      sm: <IconVerySadColor width={200} height={200} />,
      lg: <IconVerySadColor width={320} height={320} />,
    },
  };

  const getRandomQuote = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    return response.data?.slip?.advice;
  };

  const { data: quote } = useQuery({
    queryFn: getRandomQuote,
    queryKey: ["random-quote"],
  });

  return (
    <div className="flex flex-col gap-8 items-center lg:items-stretch lg:justify-between lg:flex-row ">
      <div className="flex flex-col gap-8 items-center lg:items-stretch lg:justify-between">
        <div className="flex flex-col text-center lg:text-left">
          <div className="text-preset-3 text-primary-text/70">I'm feeling</div>
          <div className="text-preset-2 text-primary-text">{mood}</div>
        </div>

        {mood && <div className="lg:hidden">{moodToIcon[mood]["sm"]}</div>}

        <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
          <IconQuote />
          <p className="text-preset-6-i text-primary-text">“{quote}”</p>
        </div>
      </div>
      {mood && (
        <div className="hidden lg:block -mb-16">{moodToIcon[mood]["lg"]}</div>
      )}
    </div>
  );
};
