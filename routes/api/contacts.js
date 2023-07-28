const express = require("express");

const schemas = require("../../schemas/contacts.js");
const { validateBodyAdd, validateBodyPut } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const getAll = require("../../controllers/contacts/getAll");
const getById = require("../../controllers/contacts/getContactById");
const add = require("../../controllers/contacts/add");
const removeById = require("../../controllers/contacts/removeById");
const updateById = require("../../controllers/contacts/updateById");
const updateFavorite = require("../../controllers/contacts/updateFavorite");
const {
  validateBodyFavoriteUpdate,
} = require("../../middlewares/validateBody.js");

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
  validateBodyPut(schemas.addContactSchema),
  ctrlWrapper(updateById)
);

module.exports = router;
