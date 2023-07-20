const { RequestError } = require("../../helpers");
const { removeContact } = require("../../models/contacts");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = removeById;
