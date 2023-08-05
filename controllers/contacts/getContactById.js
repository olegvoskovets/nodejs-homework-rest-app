// const { ObjectId } = require("bson");
const { RequestError } = require("../../helpers");
const Contact = require("../../models/contact");

const getById = async (req, res) => {
  const { contactId } = req.params;
  // if (!ObjectId.isValid(req.params.contactId)) {
  //   throw RequestError(404, "Такого Id не існує ");
  // }
  // console.log("user= ", req.user);
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw RequestError(404, "Not found");
  }

  res.status(200).json(contact);
};

module.exports = getById;
