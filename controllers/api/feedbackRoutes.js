const router = require('express').Router();
const { Feedback } = require('../../models');
const { requireAuth } = require('../../utils/authGuard');

router.post('/', requireAuth, async (req, res) => {
  try {
    const newFeedback = await Feedback.create({
      ...req.body,
      authorId: req.session.user_id,
    });
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;