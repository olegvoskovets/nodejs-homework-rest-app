const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  favorite: Joi.boolean(),
  phone: Joi.string().required(),
});

module.exports = {
  addContactSchema,
};
