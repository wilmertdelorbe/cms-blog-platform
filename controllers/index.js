const router = require('express').Router();

const mainRoutes = require('./mainRoutes');
const userdashboardRoutes = require('./userdashboardRoutes');
const apiRoutes = require('./api');

router.use('/', mainRoutes);
router.use('/dashboard', userdashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;