const sequelize = require('../../config/connection');
const { Author, BlogEntry, Feedback } = require('../models');

const authorData = require('./authorData.json');
const blogEntryData = require('./blogEntryData.json');
const feedbackData = require('./feedbackData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create authors
  const authors = await Author.bulkCreate(authorData, {
    individualHooks: true,
    returning: true,
  });

  // Create blog entries
  const blogEntries = [];
  for (const entry of blogEntryData) {
    const newEntry = await BlogEntry.create({
      ...entry,
      authorId: authors[Math.floor(Math.random() * authors.length)].id,
    });
    blogEntries.push(newEntry);
  }

  // Create feedback
  for (const feedback of feedbackData) {
    await Feedback.create({
      ...feedback,
      authorId: authors[Math.floor(Math.random() * authors.length)].id,
      blogEntryId: blogEntries[Math.floor(Math.random() * blogEntries.length)].id,
    });
  }

  console.log('Database seeded!');
  process.exit(0);
};

seedDatabase();