const router = require('express').Router();

const mainRoutes = require('./mainRoutes');
const userdashboardRoutes = require('./userdashboardRoutes');

// Set up main routes
router.use('/', mainRoutes);

// Set up user dashboard routes
router.use('/dashboard', userdashboardRoutes);

// If you have API routes, uncomment the following lines:
// const apiRoutes = require('./api');
// router.use('/api', apiRoutes);

module.exports = router;