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
