const { addContact } = require("../../models/contacts");

const add = async (req, res, next) => {
  const newContact = req.body;
  const result = await addContact(newContact);
  res.status(201).json(result);
};
module.exports=add