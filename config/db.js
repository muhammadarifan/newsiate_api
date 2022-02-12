const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "",
    "database": process.env.DB_NAME || "newsiate",
    "host": process.env.DB_HOST || "mysql",
    "dialect": process.env.DB_DIALECT || "mysql",
}