import { Button, Modal } from "@/components";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FirstStep,
  FourthStep,
  SecondStep,
  Steps,
  ThirdStep,
} from "./components";
import { moodSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_STEPS = 4;

export const LogMoodModal = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    handleSubmit,
    control,
    register,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(moodSchema),
    defaultValues: {
      mood: "",
      sleep: "",
      description: "",
      tags: [],
    },
  });

  const description = watch("description");

  const handleNextStep = async () => {
    let currentFieldName;

    if (currentStep === 1) currentFieldName = "mood"; // FirstStep
    if (currentStep === 2) currentFieldName = "tags"; // ThirdStep
    if (currentStep === 3) currentFieldName = "description"; // SecondStep
    if (currentStep === 4) currentFieldName = "sleep"; // FourthStep

    const isStepValid = await trigger(currentFieldName);

    if (isStepValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onSubmit = (data) => {
    console.log("Form submitted successfully", data);
  };

  console.log("Errors", errors);

  return (
    <Modal
      title="Log your mood"
      footer={
        <Button
          label={currentStep === 4 ? "Submit" : "Continue"}
          className="w-full mt-6"
          onClick={currentStep === 4 ? handleSubmit(onSubmit) : handleNextStep}
        />
      }
      dialogTrigger={<Button label="Log today's mood" />}
    >
      <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {(errors?.mood?.message ||
        errors?.tags?.message ||
        errors?.description?.message ||
        errors?.sleep?.message) && (
        <p className="text-preset-6 px-5 md:px-8 text-red-700 my-2">
          {errors?.mood?.message ||
            errors?.tags?.message ||
            errors?.description?.message ||
            errors?.sleep?.message}
        </p>
      )}

      <div className="max-h-[calc(100vh-350px)] overflow-y-auto px-5 md:px-8">
        {currentStep === 1 && (
          <Controller
            name="mood"
            control={control}
            render={({ field }) => (
              <FirstStep
                selectedMood={field.value}
                setSelectedMood={field.onChange}
              />
            )}
          />
        )}

        {currentStep === 2 && (
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <SecondStep
                selectedTags={field.value}
                setSelectedTags={field.onChange}
              />
            )}
          />
        )}

        {currentStep === 3 && (
          <ThirdStep
            register={register}
            descriptionLength={description.length}
          />
        )}

        {currentStep === 4 && (
          <Controller
            name="sleep"
            control={control}
            render={({ field }) => (
              <FourthStep
                selectedSleepHours={field.value}
                setSelectedSleepHours={field.onChange}
              />
            )}
          />
        )}
      </div>
    </Modal>
  );
};
