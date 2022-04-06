import { Router, Request, Response, NextFunction } from "express";
import { IUser } from "../models/google-login.model";

const router = Router();

router.get("/", (req, res) => {
  const { name } = req.user as IUser;
  res.render("profile", { user: name });
  // res.send("data gue jadi gini bro: " + name);
});

export default router;
