import dotenv, { DotenvConfigOutput } from "dotenv";
import { Options } from "@mikro-orm/core";
import { BaseEntity, User } from "../entities";

const configResult: DotenvConfigOutput = dotenv.config();
if (configResult.error) {
  throw configResult.error;
}

const mikroConfig: Options = {
  entities: [BaseEntity, User],
  dbName: "efr_db",
  type: "postgresql",
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  pool: {
    min: 0,
    max: 5,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 10000,
  },
};

export default mikroConfig;
