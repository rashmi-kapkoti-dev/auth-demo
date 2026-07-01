import { Request, Response } from "express";
import { verifyGoogleToken } from "../services/auth.service.js";
import { findOrCreateUser, formatUser } from "../services/user.service.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../services/jwt.service.js";

export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Google token is required",
      });
    }
    const payload = await verifyGoogleToken(token);
    if (!payload) {
      return res.status(401).json({
        success: false,
        message: "Invalid Google token",
      });
    }
    const user = await findOrCreateUser(payload);
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.status(200).json({
      success: true,
      user: formatUser(user),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Authentication failed",
    });
  }
};

export const logout = (_req: Request, res: Response) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
  });

  return res.status(200).json({
    success: true,
  });
};
