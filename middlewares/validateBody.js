const { RequestError } = require("../helpers");

const validateBodyAdd = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      error.message = `missing required fields ${error} `;
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
      error.message = "missing field " + error;
      next(RequestError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = {
  validateBodyAdd,
  validateBodyFavoriteUpdate,
};
