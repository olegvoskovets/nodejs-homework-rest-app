const nodemailer = require("nodemailer");

const { PASSWORD_GMAIL } = process.env;

const nodemailerConfig = {
  service: "gmail",
  auth: {
    user: "olegvoskovets@gmail.com",
    pass: PASSWORD_GMAIL,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "olegvoskovets@gmail.com" };
  await await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
