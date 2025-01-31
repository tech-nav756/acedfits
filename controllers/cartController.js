// controllers/cartController.js
const Cart = require('../models/Cart');  // Assuming we may use Cart model later for persistence

// Add product to the cart
const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    
    let cart = req.session.cart || [];

    const existingProductIndex = cart.findIndex(item => item.productId.toString() === productId);

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }

    req.session.cart = cart;
    res.status(200).json({ message: 'Product added to cart', cart });
  } catch (error) {
    next(error);
  }
};

// Get the user's cart
const getCart = async (req, res, next) => {
  try {
    const cart = req.session.cart || [];
    res.status(200).json({ cart });
  } catch (error) {
    next(error);
  }
};

// Update the quantity of a product in the cart
const updateCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    
    let cart = req.session.cart || [];
    const productIndex = cart.findIndex(item => item.productId.toString() === id);
    
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    cart[productIndex].quantity = quantity;
    req.session.cart = cart;

    res.status(200).json({ message: 'Cart updated', cart });
  } catch (error) {
    next(error);
  }
};

// Remove a product from the cart
const removeFromCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    let cart = req.session.cart || [];
    cart = cart.filter(item => item.productId.toString() !== id);

    req.session.cart = cart;
    res.status(200).json({ message: 'Product removed from cart', cart });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
};
