import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware.js";
import User from "../models/user.model.js";
import { formatUser } from "../services/user.service.js";

export const getMe = async (req: AuthRequest, res: Response) => {
  const user = await User.findById(req.user!.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  return res.status(200).json({
    success: true,
    user: formatUser(user),
  });
};
