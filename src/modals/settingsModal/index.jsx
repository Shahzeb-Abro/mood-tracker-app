import { IconSettings } from "@/assets/svgAssets";
import { Button, Input, Modal } from "@/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { onboardingSchema } from "@/lib/validations";
import { ImageUploader } from "@/modules/public/auth/onboarding/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const SettingsModal = () => {
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

  const onSubmit = (data) => {
    console.log("Data", data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <IconSettings />
          Settings
        </div>
      </DialogTrigger>

      <DialogContent
        className="px-5 py-8 md:px-10 md:py-12  rounded-2xl  gap-0 focus:outline-none"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col gap-2 text-left">
          <DialogTitle className="!text-preset-3-mobile md:!text-preset-3 text-neutral-900">
            Update your profile
          </DialogTitle>

          <DialogDescription className="!text-preset-6 text-neutral-600">
            Personalize your account with your name and photo.
          </DialogDescription>
        </DialogHeader>

        <form
          className=" bg-white  flex flex-col gap-8 py-6"
          onSubmit={handleSubmit(onSubmit)}
        >
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
        </form>

        {
          <DialogFooter className="w-full">
            <Button label={"Save Changes"} className="w-full" />
          </DialogFooter>
        }
      </DialogContent>
    </Dialog>
  );
};
