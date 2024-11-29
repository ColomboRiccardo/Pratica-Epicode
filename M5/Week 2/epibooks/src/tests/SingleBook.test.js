import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import SingleBook from "../Components/SingleBook/SingleBook.component";
import { AsinSelectedContext } from "../Contexts/context";

test("it renders singlebook", () => {
  render(
    <BrowserRouter>
      <AsinSelectedContext.Provider
        value={{ asinSelected: "" }}
      >
        <SingleBook
          book={exampleBook}
          asin={exampleBook.asin}
        />
      </AsinSelectedContext.Provider>
    </BrowserRouter>
  );
  const img = screen.getByRole("img");
  const title = screen.getByText(
    "Born of Vengeance: The League: Nemesis Rising"
  );
  const button = screen.getByText("Vai al libro");
  expect(img).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

const exampleBook = {
  asin: "1250082757",
  title: "Born of Vengeance: The League: Nemesis Rising",
  img: "https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg",
  price: 26.09,
  category: "scifi",
};
