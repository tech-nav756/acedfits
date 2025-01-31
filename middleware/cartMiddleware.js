// middleware/cartMiddleware.js
const Cart = require('../models/Cart');

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

const removeFromCart = async (req, res, next) => {
  try {
    const { productId } = req.params;

    let cart = req.session.cart || [];

    cart = cart.filter(item => item.productId.toString() !== productId);

    req.session.cart = cart;
    res.status(200).json({ message: 'Product removed from cart', cart });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addToCart,
  removeFromCart,
};
