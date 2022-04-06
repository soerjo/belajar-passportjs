import { Strategy, IStrategyOptions, VerifyFunction } from "passport-local";
import { IUser } from "../models/google-login.model";

type Optional<T> = { [P in keyof T]?: T[P] };
type IUserOpt = Optional<IUser>;

const option: IStrategyOptions = {
  usernameField: "email",
};
const cbFunction: VerifyFunction = (username, password, done) => {
  console.log("cb passLocal username: ", username);
  console.log("cb passLocal password: ", password);

  const user: IUserOpt = {
    id: "fdahi3",
    name: username,
  };
  //seharusnya kita check db

  // langsung gas aja!
  done(null, user);
};

export const passportLocal = new Strategy(option, cbFunction);
