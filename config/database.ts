require("dotenv").config();
import { Sequelize } from "sequelize";

export const database = new Sequelize({
  port: Number(process.env.DB_PORT) || 54320,
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});
