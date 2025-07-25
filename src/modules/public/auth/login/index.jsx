import { Logo } from "@/assets/svgAssets";
import { Button, Input } from "@/components";
import { ROUTES } from "@/constants/routes";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validations";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      console.log("Res", res);
      navigate(ROUTES.DASHBOARD);
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });

  const onSubmit = (data) => {
    console.log("Data", data);
    loginUser(data);
  };

  return (
    <main className="w-full min-h-screen light-gradient dark:dark-gradient flex justify-start flex-col items-center py-20 px-4 gap-8 md:gap-12">
      <div>
        <Logo />
      </div>

      <form
        className="py-10 px-4 md:px-8 rounded-2xl bg-white dark:bg-neutral-900 shadow-auth flex flex-col gap-8 md:min-w-[530px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Header  */}
        <div className="flex flex-col gap-2">
          <h2 className="text-preset-3 text-primary-text">Welcome Back!</h2>
          <p className="text-preset-6 text-secondary-text">
            Log in to continue tracking your mood and sleep.
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
          <Button
            label="Log In"
            className="w-full"
            type="submit"
            isLoading={isPending}
          />
          <p className="text-preset-6 text-center">
            <span className="text-secondary-text">Haven't got an account?</span>{" "}
            <Link to={ROUTES.REGISTER} className="text-blue-600">
              Sign up.
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
