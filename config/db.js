const { Sequelize } = require('sequelize');
require('dotenv').config();

let dbConnection;

if (process.env.DATABASE_URL) {
  dbConnection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
} else {
  dbConnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'postgres'
    }
  );
}

module.exports = dbConnection;