import User from "../models/user.model.js";

export const formatUser = (user: InstanceType<typeof User>) => ({
  id: user._id.toString(),
  name: user.name,
  email: user.email,
  role: user.role,
  picture: user.picture,
});

const getAdminRoleForEmail = (email: string) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (adminEmail && email === adminEmail) {
    return "admin";
  }
  return null;
};

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
      role: getAdminRoleForEmail(payload.email) ?? "user",
    });
    return user;
  }

  const adminRole = getAdminRoleForEmail(payload.email);
  if (adminRole && user.role !== adminRole) {
    user.role = adminRole;
    await user.save();
  }

  return user;
};
