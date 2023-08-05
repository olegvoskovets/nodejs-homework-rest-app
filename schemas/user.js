const Joi = require("joi");
const allowedSubscription = ["starter", "pro", "business"];

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  // token: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...allowedSubscription)
    .required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  subscriptionSchema,
};
