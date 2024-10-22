const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Author extends Model {
  // Method to check password validity
  validatePassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Minimum password length
      },
    },
    // Might add email and display name fields later
  },
  {
    hooks: {
      // Hash password before creating new user
      beforeCreate: async (newAuthorData) => {
        newAuthorData.password = await bcrypt.hash(newAuthorData.password, 10);
        return newAuthorData;
      },
      // Hash password before updating user if it has changed
      beforeUpdate: async (updatedAuthorData) => {
        if (updatedAuthorData.password) {
          updatedAuthorData.password = await bcrypt.hash(updatedAuthorData.password, 10);
        }
        return updatedAuthorData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'author',
  }
);

module.exports = Author;