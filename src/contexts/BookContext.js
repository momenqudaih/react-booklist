import { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name of my book 1', author: 'momenqudaih', id: 1 },
    { title: 'name of my book 2', author: 'Batrawi', id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContextProvider value={(books, addBook, removeBook)}>
      {props.children}
    </BookContextProvider>
  );
};

export default BookContextProvider;
