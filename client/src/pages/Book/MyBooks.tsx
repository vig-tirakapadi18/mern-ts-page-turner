import React, { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import { IBook } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../../api/apiClient";

const bookDetailPStyles =
  "flex gap-2 items-center text-sm font-semibold md:text-lg";

const MyBooks = (): React.JSX.Element => {
  const [books, setBooks] = useState<IBook[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const fetchedBooks = await fetchBooks();
      console.log(fetchedBooks.books);
      setBooks(fetchedBooks.books as unknown as IBook[]);
    })();
  }, []);

  return (
    <section className="bg-stone-200 h-full w-full p-[5%] *:bg-white *:px-4 *:py-2 *:rounded-md *:shadow-lg md:px-[10%] lg:px-[20%] lg:py-[2.5%] *:mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-extrabold text-stone-700">My Books</h1>
        <button
          type="button"
          className="bg-stone-700 px-4 py-2 flex items-center gap-3 text-white rounded-md hover:bg-stone-800"
          onClick={() => navigate("/new-book")}
        >
          <FaPlus />
          Add Book
        </button>
      </div>

      {books.map((book) => (
        <div key={book._id}>
          <h2 className="text-lg font-semibold text-stone-600 text-center border-b">
            {book.name}
          </h2>
          <div>
            <div className="flex h-[15rem] md:h-[30rem]">
              <img src={book.imgUrls[0]} className="flex-1 w-[70%]" />
              <div className="flex flex-col flex-0.5 *:flex-1">
                {book.imgUrls.slice(1).map((img) => (
                  <img src={img} key={img} className="h-[50%]" />
                ))}
              </div>
            </div>
            <p className="my-2 text-sm text-center text-stone-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              iure earum dolore minima excepturi eius tenetur voluptatem nisi
              nobis, consequatur beatae alias perferendis veniam eos! Beatae
              dolorum tempora vitae error saepe ipsam debitis natus laborum
              voluptatem quasi ullam laudantium adipisci reiciendis
              consequuntur, veritatis ab minima voluptates, ipsum dolore magnam
              est?
            </p>
            <div className="mt-4 flex flex-col md:justify-around md:flex-row md:my-4">
              <div>
                <p>
                  <span className="font-semibold">Author:</span> {book.author}
                </p>
                <p>
                  <span className="font-semibold">Genre:</span> {book.genre}
                </p>
                <p>
                  <span className="font-semibold">ISBN:</span> {book.isbn}
                </p>
              </div>
              <div className="flex flex-col">
                <p className={bookDetailPStyles}>
                  <FaCalendarAlt className="size-4 md:size-6 text-blue-600" />{" "}
                  {book.publicationYear}
                </p>
                <p className={bookDetailPStyles}>
                  <FaBookOpen className="size-4 md:size-6 text-rose-400" />{" "}
                  {book.pages} pages
                </p>
                <p className={bookDetailPStyles}>
                  <FaMoneyBillWave className="size-4 md:size-6 text-emerald-500" />{" "}
                  Rs. {book.price} /-
                </p>
                <p className={bookDetailPStyles}>
                  <FaStar
                    className={`${
                      book.starRating >= 3 ? "text-amber-400" : "text-red-500"
                    } size-4 md:size-7`}
                  />{" "}
                  {book.starRating} / 5
                </p>
              </div>
            </div>
            <p>
              <span className="font-semibold">Available Types:</span>{" "}
              {book.availableTypes.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyBooks;
