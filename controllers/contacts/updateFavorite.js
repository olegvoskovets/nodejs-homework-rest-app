const { RequestError } = require("../../helpers");
const Contact = require("../../models/contact");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const body = req.body;
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};
module.exports = updateFavorite;