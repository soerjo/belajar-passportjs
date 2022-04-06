import { Sequelize } from "sequelize";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from "../config/config";
import { UserGoogleModel } from "../models/google-login.model";
import { UserModel } from "../models/user.model";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT),
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  logging: false,
});

export const initDb = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync({ alter: true });
    console.log(`db has connected!`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
