const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/user");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../..", "public", "avatars");
const tempSize = path.join(__dirname, "../..", "temp");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const newNameFile = `${id}_${originalname}`;
  Jimp.read(tempUpload, function (err, test) {
    if (err) throw err;
    // console.log("tempSize", tempSize);
    test
      .resize(250, 250)
      .quality(50)
      .write(tempSize + "/" + `${id}_${originalname}`);
  });

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
