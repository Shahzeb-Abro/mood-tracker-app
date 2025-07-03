import { Button, Modal } from "@/components";
import { useState } from "react";
import { FirstStep, SecondStep, Steps } from "./components";

const MAX_STEPS = 4;

export const LogMoodModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleNextStep = () => {
    if (currentStep < MAX_STEPS) setCurrentStep((prev) => prev + 1);
  };

  return (
    <Modal
      title="Log your mood"
      footer={
        <Button
          label="Continue"
          className="w-full mt-6"
          onClick={handleNextStep}
        />
      }
      dialogTrigger={<Button label="Log Your Mood" />}
    >
      <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />

      <div className="max-h-[calc(100vh-350px)] overflow-y-auto px-5 md:px-8">
        {currentStep === 1 && (
          <FirstStep
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
          />
        )}

        {currentStep === 2 && (
          <SecondStep
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        )}
      </div>
    </Modal>
  );
};
