import React from "react";
import { useForm } from "react-hook-form";
import { ISignInFormData } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../api/apiClient";
import { useAppContext } from "../../context/AppContext";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

const SignIn = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignInFormData>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showToast } = useAppContext();

  const onSubmit = handleSubmit(async (data) => {
    console.log("DATA", data);
    const loginStatus = await signIn(data);

    if (loginStatus) {
      showToast({ message: "Logged in successfully!", type: "success" });
      dispatch(login());
      navigate("/");
    } else {
      showToast({ message: "Failed to login!", type: "error" });
    }
  });

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <form
        onSubmit={onSubmit}
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl space-y-6"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required!" })}
            />
            {errors.email && (
              <span className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters!",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-stone-600 text-white py-2.5 rounded-lg font-semibold hover:bg-stone-700 transition-all focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
        >
          Sign In
        </button>

        <div className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link
            to="/sign-up"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create new account
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
