import {
  OAuth2Strategy,
  IOAuth2StrategyOption,
  Profile,
  VerifyFunction,
} from "passport-google-oauth";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "./config";
import { UserGoogleModel } from "../models/google-login.model";

type verifyFunc = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyFunction
) => void;

const option: IOAuth2StrategyOption = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/redirect",
};

const cbFunction: verifyFunc = (token, refressToken, profile, done) => {
  console.log("=====>02) passport google");
  UserGoogleModel.findOrCreate({
    where: {
      iduser: profile.id,
    },
    defaults: {
      name: profile.displayName,
      iduser: profile.id,
    },
  })
    .then(res => {
      done(null, res[0]);
    })
    .catch(error => {
      done(error);
    });
};

export const passportGoogle = new OAuth2Strategy(option, cbFunction);
