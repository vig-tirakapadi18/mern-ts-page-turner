import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IBookFormData } from "../../types/types";
import BookDetails from "../../components/Book/BookDetails";
import BookGenre from "../../components/Book/BookGenre";
import AvailableBookTypes from "../../components/Book/AvailableBookTypes";
import AdditionalInfo from "../../components/Book/AdditionalInfo";
import ImageUpload from "../../components/Book/ImageUpload";
import { addNewBook } from "../../api/apiClient";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const ManageBookForm = (): React.JSX.Element => {
  const formMethods = useForm<IBookFormData>();
  const { handleSubmit } = formMethods;

  const { showToast } = useAppContext();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (formDataJson: IBookFormData) => {
    console.log(formDataJson);

    const formData = new FormData();
    formData.append("name", formDataJson.name);
    formData.append("author", formDataJson.name);
    formData.append("publicationYear", formDataJson.publicationYear.toString());
    formData.append("genre", formDataJson.genre);
    formData.append("description", formDataJson.description);
    formData.append("pages", formDataJson.pages.toString());
    formData.append("isbn", formDataJson.isbn);
    formData.append("price", formDataJson.price.toString());
    formData.append("starRating", formDataJson.starRating.toString());
    formDataJson.availableTypes.forEach((type, index) => {
      formData.append(`availableTypes[${index}]`, type);
    });
    Array.from(formDataJson.imgFiles).forEach((imgFile) => {
      formData.append("imgFiles", imgFile);
    });

    const newBookCreateStatus = await addNewBook(
      formData as unknown as IBookFormData
    );
    console.log("NEW BOOK STATUS", newBookCreateStatus);

    if (newBookCreateStatus) {
      showToast({ message: "New book created successfully!", type: "success" });
      navigate("/my-books");
    } else {
      showToast({ message: "New book creation failed!", type: "error" });
    }
  });

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center bg-stone-200 h-full w-screen py-4 px-[10%] lg:px-[35%]"
      >
        <h1 className="my-2 font-bold text-2xl text-stone-600 bg-white w-full text-center py-2 rounded-lg shadow-lg border-b border-stone-900">
          Create New Book
        </h1>
        <BookDetails />
        <BookGenre />
        <AvailableBookTypes />
        <AdditionalInfo />
        <ImageUpload />

        <span className="w-full my-2">
          <button className="bg-stone-700 text-white w-full my-2 py-2 rounded-md hover:bg-stone-800 font-semibold cursor-pointer">
            Create A Book
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageBookForm;
