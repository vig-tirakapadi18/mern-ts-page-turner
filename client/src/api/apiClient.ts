import toast from "react-hot-toast";
import { IUserFormData } from "../types";
import { axiosInstance } from "./axios/axiosInstance";

export const signUp = async (formData: IUserFormData) => {
  const response = await axiosInstance.post("/users/sign-up", formData, {
    withCredentials: true,
  });
  console.log(response);
  if (response.status !== 201) {
    toast.error("Failed to create account!");
  }

  return response.data;
};

export const validateUser = async () => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_API_URL}/auth/validate-token`,
    { withCredentials: true }
  );

  return response.status !== 200;
};
