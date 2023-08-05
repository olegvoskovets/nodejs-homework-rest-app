const { validateBody } = require("./validateBody");
const { validateIsId } = require("./validateIsId");
const { authenticate } = require("./authenticate");

module.exports = {
  validateBody,
  validateIsId,
  authenticate,
};
