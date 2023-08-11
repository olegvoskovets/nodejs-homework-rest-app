const { validateBody } = require("./validateBody");
const { validateIsId } = require("./validateIsId");
const { authenticate } = require("./authenticate");
const { upload } = require("./upload");

module.exports = {
  validateBody,
  validateIsId,
  authenticate,
  upload,
};
