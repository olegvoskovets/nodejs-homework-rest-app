const { RequestError } = require("../../helpers");
const { updateContact } = require("../../models/contacts");

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const body = req.body;
  const result = await updateContact(contactId, body);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;
