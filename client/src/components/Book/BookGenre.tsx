import React from "react";
import { formErrorMsgClasses, formLabelClasses } from "./BookDetails";
import { bookGenres } from "../../lib/bookGenres";
import { useFormContext } from "react-hook-form";
import { IBookFormData } from "../../types/types";

const BookGenre = (): React.JSX.Element => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<IBookFormData>();
  const genreWatch = watch("genre");

  return (
    <section className="bg-white h-fit mx-[5%] w-full px-4 pb-4 rounded-lg shadow-lg mt-4">
      <h2 className={`${formLabelClasses} mb-2`}>Genres</h2>
      <div className="grid gap-2 md:grid-cols-3">
        {bookGenres.map((genre) => (
          <label
            key={genre}
            className={`px-2 py-2 font-semibold rounded-md text-stone-700 cursor-pointer ${
              genreWatch === genre ? "bg-stone-600 text-white" : "bg-stone-200"
            }`}
          >
            <input
              type="radio"
              value={genre}
              {...register("genre", { required: "Genre is required!" })}
              className="hidden"
            />
            {genre}
          </label>
        ))}
      </div>
      {errors.genre && (
        <div
          className={`${formErrorMsgClasses} mt-3
        `}
        >
          {errors.genre.message}
        </div>
      )}
    </section>
  );
};

export default BookGenre;
