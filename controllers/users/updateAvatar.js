const path = require("path");

const fs = require("fs");
const User = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  console.log("req.file", req.file);
  try {
    const resultUpload = path.join(avatarsDir, originalname);
    console.log("resultUpload", resultUpload);

    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", originalname);

    await User.findByIdAndUpdate(req.user._id, { avatarURL });

    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
