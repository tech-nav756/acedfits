// routes/orderRoute.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createOrder } = require('../controllers/orderController');

// Route for creating an order after checkout
router.post('/checkout', protect, createOrder);

module.exports = router;
