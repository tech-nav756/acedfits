const axios = require('axios');
const paymentConfig = require('../config/paymentConfig');

const initiatePayment = async (req, res) => {
  const { amount, userId } = req.body;

  try {
    const response = await axios.post('https://api.vodapay.com/transaction', {
      amount,
      userId,
      apiKey: paymentConfig.apiKey,
      apiSecret: paymentConfig.apiSecret,
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Payment initiation failed' });
  }
};

module.exports = { initiatePayment };
