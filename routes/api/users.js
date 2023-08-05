const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/user");
const { ctrlWrapper } = require("../../helpers");
const {
  register,
  login,
  getCurrent,
  logOut,
} = require("../../controllers/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(register)
);
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(login));

router.get("/current", authenticate, ctrlWrapper(getCurrent));

router.post("/logout", authenticate, ctrlWrapper(logOut));

module.exports = router;
