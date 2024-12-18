const errorMiddleware = (err, req, response, next) => {
  if ((err.status = 404)) {
    response
      .status(404)
      .json({ error: err.message, cause: err.cause });
  } else {
    response.status(500).json({ error: err.message });
  }
  console.log(err);
};

const loggingMiddleware = (req, res, next) => {
  console.log(
    `Request Method: ${req.method}, URL: ${req.url}`
  );
  next();
};

export { errorMiddleware, loggingMiddleware };
