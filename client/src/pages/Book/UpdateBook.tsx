import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "../../types/types";
import { fetchBookById } from "../../api/apiClient";

const UpdateBook = (): React.JSX.Element => {
  const { bookId } = useParams();

  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    (async () => {
      if (!bookId) return;
      const fetchedBook = await fetchBookById(bookId);
      console.log(fetchedBook);
      setBook(fetchedBook.books);
    })();
  }, []);

  return <div>UpdateBook</div>;
};

export default UpdateBook;
