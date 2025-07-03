import { Textbox } from "@/components";

export const ThirdStep = ({ register, descriptionLength }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
          Write about your day...
        </h3>
      </div>

      <Textbox
        placeholder="Today, I felt..."
        className="placeholder:italic"
        {...register("description")}
        helper={`${descriptionLength}/150`}
        maxlength={150}
      />
    </div>
  );
};
