import { Checkbox } from "@/components";

const tags = [
  {
    id: 0,
    title: "Joyful",
  },
  {
    id: 1,
    title: "Down",
  },
  {
    id: 2,
    title: "Anxious",
  },
  {
    id: 3,
    title: "Calm",
  },
  {
    id: 4,
    title: "Excited",
  },
  {
    id: 5,
    title: "Frustrated",
  },
  {
    id: 6,
    title: "Lonely",
  },
  {
    id: 7,
    title: "Grateful",
  },
  {
    id: 8,
    title: "Overwhelmed",
  },
  {
    id: 9,
    title: "Motivated",
  },
  {
    id: 10,
    title: "Irritable",
  },
  {
    id: 11,
    title: "Peaceful",
  },
  {
    id: 12,
    title: "Tired",
  },
  {
    id: 13,
    title: "Hopeful",
  },
  {
    id: 14,
    title: "Confident",
  },
  {
    id: 15,
    title: "Stressed",
  },
  {
    id: 16,
    title: "Content",
  },
  {
    id: 17,
    title: "Disappointed",
  },
  {
    id: 18,
    title: "Optimistic",
  },
  {
    id: 19,
    title: "Restless",
  },
];

export const SecondStep = ({ selectedTags, setSelectedTags }) => {
  const handleToggleCheckbox = (val) => {
    if (selectedTags.includes(val)) {
      const updatedTags = selectedTags.filter((tag) => tag !== val);
      setSelectedTags(updatedTags);
    } else {
      if (selectedTags.length < 3) {
        const updatedTags = [...selectedTags, val];
        setSelectedTags(updatedTags);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
          How did you feel?
        </h3>
        <p className="text-preset-6 text-neutral-600">
          Select up to three tags:
        </p>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-3">
        {tags.map((tag) => (
          <Checkbox
            key={tag.id}
            checked={selectedTags.includes(tag.title)}
            label={tag.title}
            value={tag.title}
            setChecked={(val) => handleToggleCheckbox(val)}
          />
        ))}
      </div>
    </div>
  );
};
