import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware.js";

export const getAdminPanel = async (req: AuthRequest, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to the admin panel",
    data: {
      requestedBy: req.user?.email,
      role: req.user?.role,
    },
  });
};
