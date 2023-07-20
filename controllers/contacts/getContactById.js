const { RequestError } = require("../../helpers");
const { getContactById } = require("../../models/contacts");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(contact);
};

module.exports = getById;
