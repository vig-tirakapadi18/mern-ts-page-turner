import React from "react";
import {
  formErrorMsgClasses,
  formInputClasses,
  formLabelClasses,
} from "./BookDetails";
import { useFormContext } from "react-hook-form";

const AdditionalInfo = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="bg-white h-fit mx-[5%] w-full px-4 pb-4 rounded-lg shadow-lg mt-4 md:flex md:gap-4">
      <label className={`${formLabelClasses} gap-1 fle-2`}>
        Pages
        <input
          type="number"
          className={formInputClasses}
          {...register("pages", { required: "Number of pages is required!" })}
        />
        {errors.pages && (
          <span className={`${formErrorMsgClasses} mt-1 mb-0`}>
            {typeof errors.pages?.message === "string" && errors.pages?.message}
          </span>
        )}
      </label>

      <label className={`${formLabelClasses} gap-1 flex-5`}>
        ISBN Number
        <input
          type="number"
          className={formInputClasses}
          {...register("isbn", {
            validate: (value) => {
              if (value.length === 13) return true;
              else return "Please enter a valid ISBN number (13 digits).";
            },
          })}
        />
        {errors.isbn && (
          <span className={`${formErrorMsgClasses} mt-1 mb-0`}>
            {typeof errors.isbn?.message === "string" && errors.isbn?.message}
          </span>
        )}
      </label>
    </section>
  );
};

export default AdditionalInfo;
