const { RequestError } = require("../helpers");

const validateBodyAdd = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.message = "missing required name field";
      next(RequestError(400, error.message));
    }
    next();
  };
  return func;
};
const validateBodyPut = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.message = "missing fields";
      next(RequestError(400, error.message));
    }
    next();
  };
  return func;
};
const validateBodyFavoriteUpdate = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.message = "missing field favorite";
      next(RequestError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = {
  validateBodyAdd,
  validateBodyPut,
  validateBodyFavoriteUpdate,
};
