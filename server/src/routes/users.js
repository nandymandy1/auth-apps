import { Router } from "express";
import { User } from "../models";
import authGuard from "../middlewares/auth";
import validator from "../middlewares/validator";
import { RegistrationRules, AuthenticationRules } from "../validators";

const router = Router();

router.post("/register", RegistrationRules, validator, async (req, res) => {
  try {
    let { username, email } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Username is already taken.",
      });
    }
    user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered.",
      });
    }
    user = await User.create(req.body);
    let token = await user.signJWT();
    return res.status(201).json({
      token,
      success: true,
      message: "You are now registered.",
    });
  } catch (err) {
    console.log("REGISTER ERR", err.message);
    return res.status(500).json("INTERNAL SERVER ERROR");
  }
});

router.post(
  "/authenticate",
  AuthenticationRules,
  validator,
  async (req, res) => {
    try {
      let { username, password } = req.body;
      let user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "Username not found.",
        });
      }
      let isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Incorrect password.",
        });
      }
      let token = await user.signJWT();
      return res.status(200).json({
        token,
        success: true,
        message: "You are now logged in.",
      });
    } catch (err) {
      console.log("LOGIN ERR", err.message);
      return res.status(500).json("INTERNAL SERVER ERROR");
    }
  }
);

router.get("/authenticate", authGuard, async (req, res) => {
  return res.status(200).json(req.user);
});

export default router;
