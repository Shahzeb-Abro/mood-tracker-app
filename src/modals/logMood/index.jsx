import { Button, Modal } from "@/components";
import { useState } from "react";
import { FirstStep, Steps } from "./components";

const MAX_STEPS = 4;

export const LogMoodModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState("");

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

      {currentStep === 1 && (
        <FirstStep
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
      )}
    </Modal>
  );
};
