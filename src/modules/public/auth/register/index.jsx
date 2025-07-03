import { Logo } from "@/assets/svgAssets";
import { Button, Input } from "@/components";
import { ROUTES } from "@/constants/routes";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validations";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Data", data);
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
          <h2 className="text-preset-3 text-neutral-900">Create an account</h2>
          <p className="text-preset-6 text-neutral-600">
            Join to track your daily mood and sleep with ease.
          </p>
        </div>

        {/* Inputs  */}
        <div className="flex flex-col gap-5">
          <Input
            label="Email address"
            placeholder="name@mail.com"
            {...register("email")}
            error={errors?.email?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register("password")}
            error={errors?.password?.message}
          />
        </div>

        {/* Actions  */}
        <div className="flex flex-col gap-5">
          <Button label="Sign Up" className="w-full" type="submit" />
          <p className="text-preset-6 text-center">
            <span className="text-neutral-600">Already got an account?</span>{" "}
            <Link to={ROUTES.LOGIN} className="text-blue-600">
              Log in.
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
