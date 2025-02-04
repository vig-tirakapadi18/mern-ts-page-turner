import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ISignUpFormData } from "../../types/types";
import { useAppContext } from "../../context/AppContext";
import { signUp } from "../../api/apiClient";

export const formControlClasses = "flex flex-col gap-1";
export const errorMessageClasses = "text-rose-500 text-md";

const SignUp: FC = (): React.JSX.Element => {
  const [, setFormData] = useState<ISignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormData>();

  const onSubmit = handleSubmit(async (data) => {
    const userData = await signUp(data);
    setFormData(userData);

    // Toast from react-hot-toast
    // if (userData.success) {
    //   toast.success("Account created successfully!");
    // } else {
    //   toast.error("Failed to create account!");
    // }

    // Custom toast
    if (userData.success) {
      showToast({ message: "Account created successfully!", type: "success" });
      navigate("/");
    } else {
      showToast({ message: "Failed to create account!", type: "error" });
    }
  });

  return (
    <section className="flex justify-center items-center h-[100%] bg-stone-200 px-4">
      <form
        onSubmit={onSubmit}
        className="bg-stone-100 p-6 sm:p-8 rounded-lg shadow-xl text-stone-700"
      >
        <h1 className="mb-4 text-3xl sm:text-4xl font-semibold text-stone-700 border-b pb-2 text-center border-stone-500">
          Sign Up
        </h1>

        <div className="text-lg sm:text-xl space-y-3">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className={formControlClasses}>
              <label>First Name</label>
              <input
                type="text"
                className="border border-stone-400 rounded-md px-3 py-2 focus:ring focus:ring-stone-300"
                placeholder="Nobeta"
                {...register("firstName", {
                  required: "First Name is required!",
                })}
              />
              <span className={errorMessageClasses}>
                {errors.firstName?.message}
              </span>
            </div>
            <div className={formControlClasses}>
              <label>Last Name</label>
              <input
                type="text"
                className="border border-stone-400 rounded-md px-3 py-2 focus:ring focus:ring-stone-300"
                placeholder="Doraemon"
                {...register("lastName", {
                  required: "Last Name is required!",
                })}
              />
              <span className={errorMessageClasses}>
                {errors.lastName?.message}
              </span>
            </div>
          </div>

          <div className={formControlClasses}>
            <label>Email</label>
            <input
              type="email"
              className="border border-stone-400 rounded-md px-3 py-2 focus:ring focus:ring-stone-300"
              placeholder="nobeta.doraemon@gmail.com"
              {...register("email", { required: "Email is required!" })}
            />
            <span className={errorMessageClasses}>{errors.email?.message}</span>
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

          <div className={formControlClasses}>
            <label>Confirm Password</label>
            <input
              type="password"
              className="border border-stone-400 rounded-md px-3 py-2 focus:ring focus:ring-stone-300"
              placeholder="********"
              {...register("confirmPassword", {
                validate: (value) => {
                  if (!value) return "Confirm Password is required!";
                  else if (watch("password") !== value)
                    return "Passwords do not match!";
                },
              })}
            />
            <span className={errorMessageClasses}>
              {errors.confirmPassword?.message}
            </span>
          </div>

          <button
            type="submit"
            className="bg-stone-600 w-full mt-4 sm:mt-6 font-semibold cursor-pointer py-2 rounded-md text-white hover:bg-stone-700 transition-all"
          >
            Sign Up
          </button>

          <span className="block text-center text-base sm:text-lg mt-3">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-[dodgerblue] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
