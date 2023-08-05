const { Schema, model } = require("mongoose");

const allowedSubscription = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: allowedSubscription,
      default: "starter",
    },
    token: {
      type: String,
      // required: [true, "Token is required"],
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);
module.exports = User;
