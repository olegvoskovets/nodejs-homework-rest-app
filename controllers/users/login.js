const User = require("../../models/user");
const { RequestError } = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, "Email or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw RequestError(401, "Email or password invalid");
  }
  const payload = {
    id: user._id,
  };
  const { SECRET_KEY } = process.env;

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "18h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: { email: user.email, subscription: user.subscription },
  });
};

module.exports = login;
