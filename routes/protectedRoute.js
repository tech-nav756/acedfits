const express = require('express');
const router = express.Router();

// Example protected route
router.get('/profile', (req, res) => {
  // If we get here, it means the user is authenticated (thanks to the authMiddleware)
  res.status(200).json({
    message: 'Protected profile data',
    user: req.user,  // User info from the JWT (set in authMiddleware)
  });
});

module.exports = router;
