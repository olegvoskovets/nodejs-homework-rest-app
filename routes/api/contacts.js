const express = require("express");

const schemas = require("../../schemas/contacts.js");
const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middlewares");

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

router.post("/", validateBody(schemas.addContactSchema), ctrlWrapper(add));

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(updateFavorite)
);

router.delete("/:contactId", ctrlWrapper(removeById));

router.put(
  "/:contactId",
  validateBody(schemas.addContactSchema),
  ctrlWrapper(updateById)
);

module.exports = router;
