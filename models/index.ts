import { Sequelize } from "sequelize";
import { UserFactory, UserStatic } from "./user";
require("dotenv").config();

export interface DB {
  sequelize: Sequelize;
  User: UserStatic;
}

const sequelize = new Sequelize({
  port: Number(process.env.DB_PORT) || 54320,
  host: process.env.DB_HOST || "localhost",
  dialect: "postgres",
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});

const User = UserFactory(sequelize);

export const db: DB = {
  sequelize,
  User,
};
