import { Router } from "express";
import passport from "passport";
import { json } from "sequelize/types";
import { IUser } from "../models/google-login.model";

const router = Router();

// ======== render LoginOption Page ==========
router.get("/loginoption", (req, res) => {
  if (req.user) {
    res.redirect("/profile");
  } else {
    res.render("loginoption");
  }
});

// ======== regist page ============
router.get("/regist", (req, res) => res.render("regist"));
router.post("/regist", (req, res) => res.send("redirect abis regist"));

// ======== Login page ============
router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/profile");
  } else {
    res.render("login");
  }
});
router.post("/login", passport.authenticate("local", {}), (req, res) => {
  res.json(req.user);
});

// ======== Logout page ============
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// ========= Google landing page =========
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    // scope: [
    //   "https://www.googleapis.com/auth/userinfo.profile",
    //   "https://www.googleapis.com/auth/userinfo.email",
    // ],
  })
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

// ========= Facebook landing page =======
router.get("/facebook", (req, res) => res.render("facebook"));

export default router;
