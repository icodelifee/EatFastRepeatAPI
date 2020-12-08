require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;
module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "efr_db",
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "efr_db",
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "efr_db",
    host: DB_HOST,
    dialect: "postgres",
  },
};
