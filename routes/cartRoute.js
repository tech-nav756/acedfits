const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addToCart, getCart, updateCart, removeFromCart } = require('../controllers/cartController');

// Route to get and add items to cart
router.route('/')
  .get(protect, getCart)  // Get user's cart
  .post(protect, addToCart);  // Add item to cart

// Route to update or remove an item in the cart
router.route('/:id')
  .put(protect, updateCart)  // Update item in cart
  .delete(protect, removeFromCart);  // Remove item from cart

module.exports = router;
