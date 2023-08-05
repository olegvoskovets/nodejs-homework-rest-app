const User = require("../../models/user");
const { RequestError } = require("../../helpers");

const logOut = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findByIdAndUpdate(_id, { token: "" });
  if (!user) {
    throw RequestError(401);
  }

  res.json({
    message: "Logout success",
  });
};

module.exports = logOut;
