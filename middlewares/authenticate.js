const { RequestError } = require("../helpers");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(RequestError(401));
  }

  try {
    const { SECRET_KEY } = process.env;

    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) {
      next(RequestError(401));
    }
    req.user = user;
    next();
  } catch {
    next(RequestError(401));
  }
};

module.exports = {
  authenticate,
};
