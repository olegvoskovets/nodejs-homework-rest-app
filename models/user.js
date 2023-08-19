const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../helpers");

const allowedSubscription = ["starter", "pro", "business"];
const emailValidation = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 5,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailValidation,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: allowedSubscription,
      default: "starter",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleSaveErrors);

const User = model("user", userSchema);
module.exports = User;
