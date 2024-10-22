module.exports = {
  formatDate: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  truncateText: (text, length = 100) => {
    // Truncate long text for preview purposes
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
  },
  isOwner: (userId, authorId) => {
    // Check if the current user is the owner of a blog entry or feedback
    return userId === authorId;
  },
  pluralize: (word, count) => {
    // Simple pluralization helper
    return count === 1 ? word : `${word}s`;
  }
};