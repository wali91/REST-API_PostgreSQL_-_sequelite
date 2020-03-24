require("dotenv").config({ path: ".env" });

module.exports = {
  test: {
    username: process.env.DATABASE_USER,
    password: null,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "postgres"
  },
  development: {
    username: process.env.DATABASE_USER,
    password: null,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DATABASE_USER,
    password: null,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "postgres"
  }
};
