export const capitalize = (targetString) => {
  return (
    targetString.charAt(0).toUpperCase() +
    targetString.slice(1)
  );
};

export const allUpperCase = (targetString) => {
  return targetString.toUpperCase();
};

export const findBookTitle = (asin, bookList) => {
  if (!asin) return "";
  const currentBook = bookList.find(
    (book) => book.asin === asin
  );
  return currentBook?.title;
};

export const findBook = (asin, bookList) => {
  if (!asin) return "";
  const currentBook = bookList.find(
    (book) => book.asin === asin
  );
  return currentBook;
};
