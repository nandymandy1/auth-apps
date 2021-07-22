import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import express, { json } from "express";
import { success, error } from "consola";

import { PORT, DB } from "./constants";

const app = express();

app.use(cors());
app.use(json());
app.use(passport.initialize());

import "./middlewares/passport";

import userRouter from "./routes/users";

app.use("/api/users", userRouter);

const main = async () => {
  try {
    // Connect with mongoDB
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    success({ message: `DB Connected`, badge: true });
    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  } catch (err) {
    error({ message: err.message, badge: true });
  }
};

main();
