import React from "react";
import { formErrorMsgClasses, formLabelClasses } from "./BookDetails";
import { useFormContext } from "react-hook-form";
import { IBookFormData } from "../../types/types";
import { bookTypes } from "../../lib/bookTypes";

const AvailableBookTypes = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IBookFormData>();

  return (
    <section className="bg-white h-fit mx-[5%] w-full px-4 pb-4 rounded-lg shadow-lg mt-4">
      <h2 className={`${formLabelClasses} mb-2`}>Available Book Types</h2>

      <div className="grid md:grid-cols-3 gap-2">
        {bookTypes.map((type) => (
          <label
            key={type}
            className="flex items-center gap-1.5 font-semibold bg-stone-200 px-2 py-2 rounded-md"
          >
            <input
              type="checkbox"
              className="w-5 h-5"
              value={type}
              {...register("availableTypes", {
                validate: (types) => {
                  if (types && types.length > 0) return true;
                  else return "Atleast one type is required!";
                },
              })}
            />
            {type}
          </label>
        ))}
      </div>
      {errors.availableTypes && (
        <div className={`${formErrorMsgClasses} mt-2`}>
          {errors.availableTypes.message}
        </div>
      )}
    </section>
  );
};

export default AvailableBookTypes;
