import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { UUID } from "crypto";

interface IUser extends Document {
  username: string;
  password: string;
  role: string;
}

const userSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
