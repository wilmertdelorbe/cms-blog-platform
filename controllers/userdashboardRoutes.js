const router = require('express').Router();
const { BlogEntry } = require('../models');
const { requireAuth } = require('../utils/authGuard');

// Route to display user dashboard
router.get('/', requireAuth, async (req, res) => {
  try {
    const userData = await BlogEntry.findAll({
      where: { authorId: req.session.user_id },
      order: [['createdAt', 'DESC']],
    });

    const posts = userData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { 
      posts, 
      loggedIn: true,
      username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to create a new blog entry
router.post('/new', requireAuth, async (req, res) => {
  try {
    const newBlogEntry = await BlogEntry.create({
      ...req.body,
      authorId: req.session.user_id,
    });
    res.redirect('/dashboard');
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to update a blog entry
router.put('/edit/:id', requireAuth, async (req, res) => {
  try {
    const [updatedRows] = await BlogEntry.update(req.body, {
      where: { 
        id: req.params.id,
        authorId: req.session.user_id
      },
    });

    if (updatedRows > 0) {
      res.redirect('/dashboard');
    } else {
      res.status(404).json({ message: 'Blog entry not found or you are not authorized to update it' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to delete a blog entry
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const deletedRows = await BlogEntry.destroy({
      where: { 
        id: req.params.id,
        authorId: req.session.user_id
      },
    });

    if (deletedRows > 0) {
      res.json({ message: 'Blog entry deleted successfully' });
    } else {
      res.status(404).json({ message: 'Blog entry not found or you are not authorized to delete it' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;