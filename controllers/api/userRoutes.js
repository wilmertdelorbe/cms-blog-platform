const router = require('express').Router();
const { Author } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await Author.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.error('Sign-up error:', err);
    res.status(400).json({ message: 'Sign-up failed', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Author.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }
    const validPassword = await userData.validatePassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;