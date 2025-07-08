import { getMe, updateUserDetails } from "@/api/auth";
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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const SettingsModal = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      file: null,
    },
    resolver: zodResolver(onboardingSchema),
  });

  const { mutate: updateDetails, isPending } = useMutation({
    mutationFn: updateUserDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      setOpen(false);
    },
    onError: (err) => {
      console.log("Update user err", err);
    },
  });

  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  const onSubmit = (data) => {
    console.log("Data", data);
    if (data.name || data.file) updateDetails(data);
  };

  const user = data?.user;

  const handleDialogChange = (isOpen) => {
    setOpen(isOpen);

    if (!isOpen) {
      reset({ name: user.name, file: null });
    }
  };

  useEffect(() => {
    if (user) reset({ name: user.name, file: null });
  }, [user, reset]);

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <IconSettings />
          Settings
        </div>
      </DialogTrigger>

      <DialogContent
        className="px-5 py-8 md:px-10 md:py-12  rounded-2xl  gap-0 focus:outline-none bg-white dark:bg-neutral-900"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col gap-2 text-left">
          <DialogTitle className="!text-preset-3-mobile md:!text-preset-3 text-primary-text">
            Update your profile
          </DialogTitle>

          <DialogDescription className="!text-preset-6 text-secondary-text">
            Personalize your account with your name and photo.
          </DialogDescription>
        </DialogHeader>

        <form
          className=" bg-white dark:bg-neutral-900 flex flex-col gap-8 pt-6"
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
            <ImageUploader
              setValue={setValue}
              error={errors?.file?.message}
              imgUrl={user?.imgUrl}
            />
          </div>
          {
            <DialogFooter className="w-full">
              <Button
                label={"Save Changes"}
                className="w-full"
                isLoading={isPending}
              />
            </DialogFooter>
          }
        </form>
      </DialogContent>
    </Dialog>
  );
};
