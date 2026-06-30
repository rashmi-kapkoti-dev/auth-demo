import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const ACCESS_TOKEN_EXPIRES_IN = "15m";
const REFRESH_TOKEN_EXPIRES_IN = "7d";

export const generateAccessToken = (user: InstanceType<typeof User>) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    },
  );
};

export const generateRefreshToken = (user: InstanceType<typeof User>) => {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_REFRESH_SECRET!,
    {
      expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    },
  );
};
