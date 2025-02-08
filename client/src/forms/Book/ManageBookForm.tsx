import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IBookFormData } from "../../types/types";
import BookDetails from "../../components/Book/BookDetails";
import BookGenre from "../../components/Book/BookGenre";

const ManageBookForm = (): React.JSX.Element => {
  const formMethods = useForm<IBookFormData>();

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col items-center justify-center bg-stone-200 h-full w-screen py-4 px-[10%] lg:px-[35%]">
        <h1 className="self-start my-2 font-bold text-2xl text-stone-600">
          Create New Book
        </h1>
        <BookDetails />
        <BookGenre />
      </form>
    </FormProvider>
  );
};

export default ManageBookForm;
