const express = require("express");

const schemas = require("../../schemas/contacts.js");
const { ctrlWrapper } = require("../../helpers");

const {
  validateBodyAdd,
  validateBodyFavoriteUpdate,
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

router.get("/", ctrlWrapper(getAll));

router.get("/:contactId", ctrlWrapper(getById));

router.post("/", validateBodyAdd(schemas.addContactSchema), ctrlWrapper(add));

router.patch(
  "/:contactId/favorite",
  validateBodyFavoriteUpdate(schemas.updateFavoriteSchema),
  ctrlWrapper(updateFavorite)
);

router.delete("/:contactId", ctrlWrapper(removeById));

router.put(
  "/:contactId",
  validateBodyAdd(schemas.addContactSchema),
  ctrlWrapper(updateById)
);

module.exports = router;
