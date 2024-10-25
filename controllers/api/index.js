const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const feedbackRoutes = require('./feedbackRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/feedback', feedbackRoutes);

module.exports = router;