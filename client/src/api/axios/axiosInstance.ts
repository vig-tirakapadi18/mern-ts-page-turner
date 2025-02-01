import axios, { AxiosInstance } from "axios";

console.log(import.meta.env.VITE_API_URL as string);

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});
