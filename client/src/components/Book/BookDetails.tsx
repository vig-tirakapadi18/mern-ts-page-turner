import React from "react";
import { useFormContext } from "react-hook-form";
import { IBookFormData } from "../../types/types";

export const formLabelClasses =
  "flex flex-col text-lg font-semibold text-stone-600 my-4";
const formInputClasses =
  "border-b border-stone-600 bg-stone-100 rounded-md outline-none px-2 py-1";
export const formErrorMsgClasses = "text-rose-500 text-sm mt-1 font-semibold";

const ratingData = ["--Select Rating--", 1, 2, 3, 4, 5];

const BookDetails = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IBookFormData>();
  return (
    <section className="bg-white h-fit mx-[5%] w-full px-4 py-2 rounded-lg shadow-lg">
      <label className={formLabelClasses}>
        Name
        <input
          type="text"
          className={formInputClasses}
          {...register("author", { required: "Author is required!" })}
        />
        {errors.author && (
          <span className={formErrorMsgClasses}>{errors.author.message}</span>
        )}
      </label>

      <div className="flex flex-col w-full md:gap-4 md:flex-row">
        <label className={`${formLabelClasses} flex-3`}>
          Author
          <input
            type="text"
            className={formInputClasses}
            {...register("author", { required: "Author is required!" })}
          />
          {errors.author && (
            <span className={formErrorMsgClasses}>{errors.author.message}</span>
          )}
        </label>

        <label className={`${formLabelClasses} flex-2`}>
          Publication Year
          <input
            type="number"
            min={1900}
            max={9999}
            className={formInputClasses}
            {...register("publicationYear", {
              required: "Publication Year is required!",
              validate: (value) => {
                if (
                  Number(value) < 1900 ||
                  Number(value) > 9999 ||
                  String(value).length !== 4
                ) {
                  return "Please enter a valid year (greater than 1900).";
                }
                return true;
              },
            })}
          />
          {errors.publicationYear && (
            <span className={formErrorMsgClasses}>
              {errors.publicationYear.message}
            </span>
          )}
        </label>
      </div>

      <label className={formLabelClasses}>
        Description
        <textarea
          rows={5}
          className={formInputClasses}
          {...register("description", { required: "Description is required!" })}
        />
        {errors.description && (
          <span className={formErrorMsgClasses}>
            {errors.description.message}
          </span>
        )}
      </label>

      <div className="flex flex-col md:flex-row md:gap-4">
        <label className={`${formLabelClasses} flex-1`}>
          Price
          <input
            type="number"
            min={1}
            className={formInputClasses}
            {...register("price", { required: "Price is required!" })}
          />
          {errors.price && (
            <span className={formErrorMsgClasses}>{errors.price.message}</span>
          )}
        </label>

        <label className={`${formLabelClasses} flex-1`}>
          Rating
          <select
            className={`${formInputClasses} text-center py-1.5`}
            {...register("starRating", { required: "Rating is required!" })}
          >
            {ratingData.map((rating) => (
              <option
                key={rating}
                value={rating === "--Select Rating--" ? "" : rating}
              >
                {rating}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
};

export default BookDetails;
