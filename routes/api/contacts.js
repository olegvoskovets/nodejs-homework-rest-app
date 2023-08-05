const express = require("express");

const schemas = require("../../schemas/contacts.js");
const { ctrlWrapper } = require("../../helpers");

const {
  validateBody,
  validateIsId,
  authenticate,
} = require("../../middlewares");

const {
  add,
  getById,
  getAll,
  removeById,
  updateById,
  updateFavorite,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getAll));
router.get("/:contactId", authenticate, validateIsId, ctrlWrapper(getById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addContactSchema),
  ctrlWrapper(add)
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  validateIsId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(updateFavorite)
);
router.delete(
  "/:contactId",
  authenticate,
  validateIsId,
  ctrlWrapper(removeById)
);
router.put(
  "/:contactId",
  authenticate,
  validateIsId,
  validateBody(schemas.addContactSchema),
  ctrlWrapper(updateById)
);

module.exports = router;
