// Authentication middleware for protecting routes
const requireAuth = (req, res, next) => {
  // If the user is not logged in, redirect to the login page
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

// Authentication middleware for API routes
const requireApiAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.status(401).json({ message: 'You must be logged in to perform this action' });
  } else {
    next();
  }
};

// Middleware to prevent authenticated users from accessing certain routes
const preventAuthenticatedAccess = (req, res, next) => {
  if (!req.session.logged_in) {
    next();
  } else {
    res.redirect('/dashboard');
  }
};

module.exports = { requireAuth, requireApiAuth, preventAuthenticatedAccess };