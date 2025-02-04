const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const schemas = require("../../schemas/user");
const { ctrlWrapper } = require("../../helpers");
const {
  register,
  login,
  getCurrent,
  logOut,
  subscription,
  updateAvatar,
  verifyEmail,
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

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

router.patch(
  "/:id/subscription",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrlWrapper(subscription)
);
router.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));

module.exports = router;
