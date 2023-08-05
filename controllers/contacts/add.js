const Contact = require("../../models/contact");

const add = async (req, res) => {
  const { _id: owner } = req.user;
  console.log("owner", owner);
  const newContact = req.body;
  const result = await Contact.create({ ...newContact, owner });
  res.status(201).json(result);
};
module.exports = add;
