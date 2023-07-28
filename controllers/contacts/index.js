const getAll = require("./getAll");
const add = require("./add");
const getById = require("./getContactById");
const removeById = require("./removeById");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");

module.exports = {
  add,
  getAll,
  getById,
  removeById,
  updateById,
  updateFavorite,
};
