import express from "express";
import morgan from "morgan";
import path from "path";
import passport from "passport";
import expressSession from "express-session";
import cookieSession from "cookie-session";
import { passportSetup } from "./config/passport";
import { PORT, COOKIE_KEY } from "./config/config";
import { initDb } from "./db/dbconnection";
import authRouters from "./routes/auth.routes";
import profileRouters from "./routes/profile.routes";
import { authCheck } from "./middleware/chechAuth.middleware";

// =========== setup ============
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ========= setup middleware ===========
app.use(morgan("dev"));
app.use(express.json());
// app.use(
//   expressSession({
//     secret: COOKIE_KEY,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
app.use(
  cookieSession({
    maxAge: 2 * 60 * 1000,
    keys: [COOKIE_KEY],
    httpOnly: true,
  })
);
app.use(express.urlencoded({ extended: false }));

// ======== passportjs setup============
app.use(passport.initialize());
app.use(passport.session());
passportSetup(app);

// ======= base route ==============
app.get("/", (req, res) => res.render("home"));
app.use("/auth", authRouters);
app.use("/profile", authCheck, profileRouters);

// ============ run ===========
app.listen(PORT, async () => {
  await initDb();
  console.log(`server has run at port: ${PORT}`);
});
