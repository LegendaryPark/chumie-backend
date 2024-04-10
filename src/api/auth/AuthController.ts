import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../../models/User";

const registerUser = async (username: string, password: string) => {
  const user = new User({ username, password });
  await user.save();
};

const logInUser = async (username: string, password: string) => {
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Authentication failed");
  }

  const accessToken = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

export { registerUser, logInUser };
