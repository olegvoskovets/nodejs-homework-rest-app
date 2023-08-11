const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/user");
const avatarDir = path.join(__dirname, "../..", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const newNameFile = `${id}_${originalname}`;
  try {
    const resultUpload = path.join(avatarDir, newNameFile);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", newNameFile);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });
    res.json({ avatarURL });
  } catch (err) {
    await fs.unlink(tempUpload);
    throw err;
  }
};

module.exports = updateAvatar;
