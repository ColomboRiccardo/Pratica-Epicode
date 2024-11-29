import { render, screen } from "@testing-library/react";
import AllTheBooks from "../Components/AllTheBooks/AllTheBooks.component";
import { BrowserRouter } from "react-router";

import {
  BookContext,
  AsinSelectedContext,
  ThemeContext,
} from "../Contexts/context";

import bookStore from "../assets/scifi.json";

test("renders allTheBooks", () => {
  render(
    <BrowserRouter>
      <BookContext.Provider value={{ bookList: bookStore }}>
        <AsinSelectedContext.Provider
          value={{ asinSelected: "" }}
        >
          <AllTheBooks />
        </AsinSelectedContext.Provider>
      </BookContext.Provider>
    </BrowserRouter>
  );
  const books = screen.getAllByTestId("SingleBook");
  expect(books.length).toBe(bookStore.length);
});
