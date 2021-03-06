import { pick } from "lodash";
import { sign } from "jsonwebtoken";
import { SECRET } from "../constants";
import { Schema, model } from "mongoose";
import { compare, hash } from "bcryptjs";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hash(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.password);
};

UserSchema.methods.getUserInfo = function () {
  return pick(this, ["_id", "name", "username", "email"]);
};

UserSchema.methods.signJWT = async function () {
  let payload = this.getUserInfo();
  return await sign(payload, SECRET, { expiresIn: "2 days" });
};

const User = model("users", UserSchema);

export default User;
