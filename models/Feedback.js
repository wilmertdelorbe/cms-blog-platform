const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Feedback extends Model {}

Feedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blogEntryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_entry',
        key: 'id',
      },
    },
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'author',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'feedback',
  }
);

module.exports = Feedback;