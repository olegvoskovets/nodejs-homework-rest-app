const { isValidObjectId } = require("mongoose");
const { RequestError } = require("../helpers");

const validateIsId = (req, _, next) => {
  if (!isValidObjectId(req.params.contactId)) {
    next(RequestError(400, "Id is not valid"));
  }

  next();
};

module.exports = {
  validateIsId,
};
