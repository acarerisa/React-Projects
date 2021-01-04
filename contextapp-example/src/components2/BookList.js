import React, { useContext } from "react";
import { bookContext } from "../contexts/BookContext";
import { themeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(themeContext);
  const { books } = useContext(bookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
