import React from "react";
import { useForm } from "react-hook-form";
import { ISignInFormData } from "../../types/types";
import { Link } from "react-router-dom";
import { errorMessageClasses, formControlClasses } from "./SignUp";

const SignIn = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useForm<ISignInFormData>();

  const onSubmit = () => {};

  return (
    <section className="flex justify-center items-center h-[100%] bg-stone-200 px-4">
      <form
        onSubmit={onSubmit}
        className="bg-stone-100 lg:w-[30%] p-6 sm:p-8 rounded-lg shadow-xl text-stone-700"
      >
        <h1 className="mb-4 text-3xl sm:text-4xl font-semibold text-stone-700 border-b pb-2 text-center border-stone-500">
          Sign In
        </h1>

        <div className="text-lg sm:text-xl space-y-3">
          <div className="flex flex-col w-full gap-4">
            <div className={formControlClasses}>
              <label>Email</label>
              <input
                type="email"
                className="border border-stone-400 rounded-md px-3 py-2 focus:ring focus:ring-stone-300"
                placeholder="nobeta.doraemon@gmail.com"
                {...register("email", { required: "Email is required!" })}
              />
              <span className={errorMessageClasses}>
                {errors.email?.message}
              </span>
            </div>

            <div className={formControlClasses}>
              <label>Password</label>
              <input
                type="password"
                className="border border-stone-400 rounded-md px-3 py-2 focus:ring focus:ring-stone-300"
                placeholder="********"
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 8,
                    message: "Password must be atleast 8 characters!",
                  },
                })}
              />
              <span className={errorMessageClasses}>
                {errors.password?.message}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-stone-600 w-full mt-4 sm:mt-6 font-semibold cursor-pointer py-2 rounded-md text-white hover:bg-stone-700 transition-all"
          >
            Sign In
          </button>

          <span className="block text-center text-base sm:text-lg mt-3">
            Don&apos;t have an account?{" "}
            <Link
              to="/sign-in"
              className="text-[dodgerblue] font-semibold hover:underline"
            >
              Create new account
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
