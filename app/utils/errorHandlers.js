exports.logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

exports.errorHandler = (err, req, res, next) => {
  res.status(500).send({ 
    error : err.message,
    stack : err.stack 
  });
};