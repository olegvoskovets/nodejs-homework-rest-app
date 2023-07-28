const { RequestError } = require("../../helpers");
const Contact = require("../../models/contact");

const getById = async (req, res) => {
  const { contactId } = req.params;
  console.log(contactId);
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw RequestError(404, "Not found");
  }

  res.status(200).json(contact);
};

module.exports = getById;
