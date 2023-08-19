const User = require("../../models/user");
const { RequestError, sendEmail } = require("../../helpers");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, "Email already in use");
  }

  const verificationToken = nanoid();
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    verificationToken,
  });

  await newUser.save();

  const mail = {
    to: email,
    subject: "Підтвердіть  email",
    html: `<a target="_blanc" href="http://localhost:3000/api/users/verify${verificationToken}">Підтвердіть будь ласка свій email</a>`,
  };
  await sendEmail(mail);

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
    verificationToken,
  });
};

module.exports = register;
