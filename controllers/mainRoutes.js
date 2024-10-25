const router = require('express').Router();
const { BlogEntry, Author, Feedback } = require('../models');
const { requireAuth, preventAuthenticatedAccess } = require('../utils/authGuard');

// Route to display all blog posts on the homepage
router.get('/', async (req, res) => {
  try {
    const blogData = await BlogEntry.findAll({
      include: [{ model: Author, attributes: ['username'] }],
      order: [['createdAt', 'DESC']],
    });

    const posts = blogData.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      posts, 
      loggedIn: req.session.logged_in,
      username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to display a single blog post and its comments
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await BlogEntry.findByPk(req.params.id, {
      include: [
        { model: Author, attributes: ['username'] },
        {
          model: Feedback,
          include: [{ model: Author, attributes: ['username'] }],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });
      res.render('singlePost', { 
        post, 
        loggedIn: req.session.logged_in,
        username: req.session.username
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to display login page
router.get('/login', preventAuthenticatedAccess, (req, res) => {
  res.render('login');
});

// Route to display signup page
router.get('/signup', preventAuthenticatedAccess, (req, res) => {
  res.render('signup');
});

module.exports = router;