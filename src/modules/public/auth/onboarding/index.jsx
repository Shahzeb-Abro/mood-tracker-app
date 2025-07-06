import { Logo } from "@/assets/svgAssets";
import { Button, Input } from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "@/lib/validations";
import { ImageUploader } from "./components";
import { useMutation } from "@tanstack/react-query";
import { updateUserDetails } from "@/api/auth";
import { ROUTES } from "@/constants/routes";
import { useNavigate } from "react-router-dom";

export const Onboarding = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      file: null,
    },
    resolver: zodResolver(onboardingSchema),
  });

  const { mutate: updateDetails } = useMutation({
    mutationFn: updateUserDetails,
    onSuccess: (res) => {
      console.log("Update user res", res);
      navigate(ROUTES.DASHBOARD);
    },
    onError: (err) => {
      console.log("Update user err", err);
    },
  });

  const onSubmit = (data) => {
    if (data.name || data.file) updateDetails(data);
    else navigate(ROUTES.DASHBOARD);
  };

  return (
    <main className="w-full min-h-screen light-gradient flex justify-start flex-col items-center py-20 px-4 gap-8 md:gap-12">
      <div>
        <Logo />
      </div>

      <form
        className="py-10 px-4 md:px-8 rounded-2xl bg-white shadow-auth flex flex-col gap-8 md:min-w-[530px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Header  */}
        <div className="flex flex-col gap-2">
          <h2 className="text-preset-3 text-neutral-900">
            Personalize your experience
          </h2>
          <p className="text-preset-6 text-neutral-600">
            Add your name and a profile picture to make Mood yours.
          </p>
        </div>

        {/* Inputs  */}
        <div className="flex flex-col gap-5">
          <Input
            label="Name"
            placeholder="Jane Appleseed"
            {...register("name")}
            error={errors?.name?.message}
          />
          <ImageUploader setValue={setValue} error={errors?.file?.message} />
        </div>

        {/* Actions  */}
        <div className="flex flex-col gap-5">
          <Button label="Start Tracking" className="w-full" type="submit" />
        </div>
      </form>
    </main>
  );
};
