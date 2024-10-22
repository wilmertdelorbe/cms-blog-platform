const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// BlogEntry model for storing blog posts
class BlogEntry extends Model {}

BlogEntry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog_entry',
  }
);

module.exports = BlogEntry;