import { v2 as cloudinary } from "cloudinary";

export const connectToCloudinary = () => {
  return cloudinary.config({
    cloud_name: process.env.CLOUDINATY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};
