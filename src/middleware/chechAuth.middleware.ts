import { Router, Request, Response, NextFunction } from "express";
import { IUser } from "../models/google-login.model";

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  console.log("===> authCheck", req.user && true);
  if (!req.user) {
    res.redirect("/");
  } else {
    next();
  }
};
