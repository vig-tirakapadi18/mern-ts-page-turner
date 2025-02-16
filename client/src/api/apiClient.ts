import toast from "react-hot-toast";
import {
  IApiReturnType,
  IBook,
  IBookFormData,
  ISignInFormData,
  ISignUpFormData,
} from "../types/types";
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

export const signIn = async (formData: ISignInFormData): Promise<boolean> => {
  const response = await axiosInstance.post("/auth/sign-in", formData, {
    withCredentials: true,
  });
  if (!response.data.success) {
    toast.error("Failed to sign in!");
  }

  return response.data.success;
};

export const signOut = async (): Promise<boolean> => {
  const response = await axiosInstance.post("/auth/sign-out", null, {
    withCredentials: true,
  });

  return response.data.success;
};

export const validateUser = async (): Promise<boolean> => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_API_URL}/auth/validate-token`,
    { withCredentials: true }
  );

  return response.status !== 200;
};

export const addNewBook = async (
  newBookData: IBookFormData
): Promise<boolean> => {
  const response = await axiosInstance.post(
    `${import.meta.env.VITE_API_URL}/books/create-book`,
    newBookData,
    { withCredentials: true }
  );

  console.log("BOOK RESP", response.data);
  return response.data.success;
};

export const fetchBooks = async (): Promise<IApiReturnType<IBook>> => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_API_URL}/books`,
    { withCredentials: true }
  );

  console.log("FETCH BOOKS", response.data);

  return response.data;
};

export const fetchBookById = async (
  bookId: string
): Promise<IApiReturnType<IBook>> => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_API_URL}/books/${bookId}`,
    { withCredentials: true }
  );

  console.log("FETCH BOOK BY ID", response.data);

  return response.data;
};
