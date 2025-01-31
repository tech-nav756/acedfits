// controllers/orderController.js
const Order = require('../models/Order');
const Cart = require('../models/Cart');  // Assuming we may use this model later if we persist cart data in DB

const createOrder = async (req, res, next) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;
    const cart = req.session.cart || [];

    if (!cart || cart.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const order = new Order({
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      items: cart,
      totalAmount: cart.reduce((total, item) => total + item.price * item.quantity, 0),  // Assuming each cart item has a price
      status: 'Pending',
    });

    await order.save();

    req.session.cart = [];  // Empty the cart after order creation
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
};
