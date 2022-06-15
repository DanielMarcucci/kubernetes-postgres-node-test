const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST || "localhost",
  dialect: "postgres",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "12345",
  database: process.env.DB_DATABASE || "angular",
  logging: false,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Customers = require("./customer")(sequelize, Sequelize);

module.exports = db;