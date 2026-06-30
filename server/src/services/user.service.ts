import User from "../models/user.model.js";

export const findOrCreateUser = async (payload: any) => {
  let user = await User.findOne({
    googleId: payload.sub,
  });
  if (!user) {
    user = await User.create({
      googleId: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    });
  }
  return user;
};
