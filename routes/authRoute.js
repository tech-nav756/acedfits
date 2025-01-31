const express = require('express');
const router = express.Router();
const { signup, login, logout } = require('../controllers/authController');

// Sign Up Route
router.post('/signup', signup);

// Login Route
router.post('/login', login);

// Logout Route (optional)
router.get('/logout', logout);

module.exports = router;
