// Import the Sequelize library for database operations
const { Sequelize } = require('sequelize');

// Load environment variables from a .env file
require('dotenv').config();

// Declare a variable to hold our database connection
let dbConnection;

// Check if we have a DATABASE_URL environment variable (usually for production)
if (process.env.DATABASE_URL) {
  // If we do, create a new Sequelize instance using that URL
  dbConnection = new Sequelize(process.env.DATABASE_URL);
} else {
  // If not, we're probably in development, so use local database credentials
  dbConnection = new Sequelize(
    process.env.DB_NAME,  // Database name
    process.env.DB_USERNAME,  // Database username
    process.env.DB_PASSWORD,  // Database password
    {
      host: process.env.DB_HOST,  // Database host
      dialect: process.env.DB_DIALECT  // Database dialect
    }
  );
}

// Export the database connection so we can use it in other parts of our app
module.exports = dbConnection;