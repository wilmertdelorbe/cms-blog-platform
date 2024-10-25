const router = require('express').Router();
const { BlogEntry, Author, Feedback } = require('../../models');
const { requireAuth } = require('../../utils/authGuard');

router.post('/', requireAuth, async (req, res) => {
  try {
    const newBlogEntry = await BlogEntry.create({
      ...req.body,
      authorId: req.session.user_id
    });
    res.status(201).json(newBlogEntry);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', requireAuth, async (req, res) => {
  try {
    const [updatedRows] = await BlogEntry.update(req.body, {
      where: { 
        id: req.params.id,
        authorId: req.session.user_id
      },
    });
    if (updatedRows > 0) {
      res.status(200).json({ message: 'Blog entry updated successfully' });
    } else {
      res.status(404).json({ message: 'Blog entry not found or you are not authorized to update it' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const deletedRows = await BlogEntry.destroy({
      where: { 
        id: req.params.id,
        authorId: req.session.user_id
      },
    });
    if (deletedRows > 0) {
      res.status(200).json({ message: 'Blog entry deleted successfully' });
    } else {
      res.status(404).json({ message: 'Blog entry not found or you are not authorized to delete it' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogEntry = await BlogEntry.findByPk(req.params.id, {
      include: [
        { model: Author, attributes: ['username'] },
        { 
          model: Feedback,
          include: [{ model: Author, attributes: ['username'] }],
        },
      ],
    });

    if (blogEntry) {
      res.json(blogEntry);
    } else {
      res.status(404).json({ message: 'Blog entry not found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;