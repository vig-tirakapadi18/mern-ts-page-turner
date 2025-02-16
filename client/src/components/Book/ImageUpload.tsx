import React from "react";
import { useFormContext } from "react-hook-form";
import { formErrorMsgClasses, formLabelClasses } from "./BookDetails";

const ImageUpload = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="bg-white h-fit mx-[5%] w-full px-4 pb-4 rounded-lg shadow-lg mt-4 md:flex md:flex-col">
      <label htmlFor="imgs" className={formLabelClasses}>
        Upload Images
      </label>
      <input
        type="file"
        id="imgs"
        multiple
        accept="image/*"
        className="w-full border border-dashed rounded-lg flex items-center justify-center bg-stone-200 py-10 px-10"
        {...register("imgFiles", {
          validate: (imgFiles) => {
            const totalLength = imgFiles.length;

            if (totalLength === 0) {
              return "Atleast one image is required!";
            }

            if (totalLength > 3) {
              return "You can only upload a maximum of 3 images!";
            }

            return true;
          },
        })}
      />
      {errors.imgFiles?.message && (
        <span className={formErrorMsgClasses}>
          {String(errors.imgFiles.message)}
        </span>
      )}
    </section>
  );
};

export default ImageUpload;
