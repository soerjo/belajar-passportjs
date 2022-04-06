import { Application } from "express";
import { IUser, UserGoogleModel } from "../models/google-login.model";
import passport from "passport";
import { passportGoogle } from "./passport-google";
import { passportLocal } from "./passport-local";
import { BaseError } from "sequelize";

// kita ubah parameter jadi optional
type Optional<T> = { [P in keyof T]?: T[P] };
type IUserOpt = Optional<IUser>;

export const passportSetup = (app: Application) => {
  // saat client masuk bakal lewat sini dulu
  // doi ngecek coockie id yang di bawa client dan check ke DB
  passport.deserializeUser<IUserOpt>((id, done) => {
    console.log("=====>01) passport deserialize");
    UserGoogleModel.findOne({ where: { id } })
      .then(user => done(null, user))
      .catch(err => {
        done(null, false);
      });
  });

  passport.use(passportLocal);
  passport.use(passportGoogle);

  // setelah client login serializeUser di hit!
  // buat generete cookie
  passport.serializeUser((user: IUserOpt, cb) => {
    console.log("=====>03) serialize");
    console.log("isi user id: ", user.id);
    cb(null, user.id || 24);
  });
};
