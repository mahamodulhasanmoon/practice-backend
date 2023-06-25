export const notFoundHandler = (req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
};

export const errorHandler = (error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({
    status: 500,
    message: "something went wrong",
  });
};
