import Author from "../models/authors.js";

const ERROR_404_USER_NOT_FOUND = new Error(
  "Author not found",
  {
    status: 404,
    cause:
      "Hai cercato un autore che non esiste nel database",
  }
);

const queryAll = async () => {
  const authors = await Author.find({});
  return authors;
};

const queryAuthorFromId = async (
  request,
  response,
  next
) => {
  const id = request.params.id;
  try {
    const author = await Author.find({ _id: id });
    if (author.length === 0) {
      //   const databaseError = new Error("Author not found");
      next(ERROR_404_USER_NOT_FOUND);
    } else {
      response.json(author);
    }
  } catch (error) {
    const databaseError = new Error(
      "Error querying authors " + error
    );
    next(databaseError);
  }
};

export { queryAll, queryAuthorFromId };
