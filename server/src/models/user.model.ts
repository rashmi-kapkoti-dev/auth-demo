import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    googleId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    picture: String,
    role: {
      type: String,
      enum: ["admin", "manager", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

export default model("User", userSchema);
