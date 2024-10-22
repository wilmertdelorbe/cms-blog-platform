const Author = require('./Author');
const BlogEntry = require('./BlogEntry');
const Feedback = require('./Feedback');

// Defining relationships between models
BlogEntry.belongsTo(Author, {
  foreignKey: 'authorId',
  onDelete: 'CASCADE',
});

BlogEntry.hasMany(Feedback, {
  foreignKey: 'blogEntryId',
  onDelete: 'CASCADE',
});

Feedback.belongsTo(Author, {
  foreignKey: 'authorId',
  onDelete: 'CASCADE',
});

// Exporting models for use in other parts of the application
module.exports = {
  Author,
  BlogEntry,
  Feedback,
};