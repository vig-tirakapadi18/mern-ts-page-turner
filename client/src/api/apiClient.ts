import toast from "react-hot-toast";
import { ISignInFormData, ISignUpFormData } from "../types/types";
import { axiosInstance } from "./axios/axiosInstance";

export const signUp = async (formData: ISignUpFormData) => {
  const response = await axiosInstance.post("/users/sign-up", formData, {
    withCredentials: true,
  });
  console.log(response);
  if (response.status !== 201) {
    toast.error("Failed to create account!");
  }

  return response.data;
};

export const signIn = async (formData: ISignInFormData) => {
  const response = await axiosInstance.post("/auth/sign-in", formData, {
    withCredentials: true,
  });
  if (!response.data.success) {
    toast.error("Failed to sign in!");
  }

  return response.data.success;
};

export const signOut = async () => {
  const response = await axiosInstance.post("/auth/sign-out", null, {
    withCredentials: true,
  });

  return response.data.success;
};

export const validateUser = async () => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_API_URL}/auth/validate-token`,
    { withCredentials: true }
  );

  return response.status !== 200;
};
