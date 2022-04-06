import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.SERVER_PORT || 5000;

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID! as string;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET! as string;

export const DB_HOST = process.env.DB_HOST! as string;
export const DB_PORT = process.env.DB_PORT!;
export const DB_DATABASE = process.env.DB_DATABASE! as string;
export const DB_USERNAME = process.env.DB_USERNAME! as string;
export const DB_PASSWORD = process.env.DB_PASSWORD! as string;

export const COOKIE_KEY = process.env.COOKIE_KEY! as string;
